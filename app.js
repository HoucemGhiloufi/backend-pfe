const express = require('express');
const morgan = require('morgan');
const cors = require("cors")
const mongoose = require('mongoose');
const PolicyDetailsRoutes = require('./routes/PolicyDetailsRoutes');
const PolicySummaryRoutes = require('./routes/PolicySummaryRoutes');
const policyRoutes = require('./routes/policyRoutes');

const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const session = require('express-session');
const Keycloak = require('keycloak-connect');
const contractUtils = require('./contractUtils'); // Assurez-vous de spécifier le chemin correct
const schedule = require('node-schedule');

const app = express();
app.use(cors("*"))
// Middleware CORS
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4500');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Configuration de la session

const memoryStore = new session.MemoryStore();
app.use(session({
  secret: 'your-secret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));
const { transitionAvenants } = require('./scheduled job/scheduled-jobs');

// Call the function to start the scheduler
transitionAvenants();
// Configuration de Keycloak
const keycloak = new Keycloak({ store: memoryStore });
app.use(keycloak.middleware());

// Routes sécurisées
app.get('/secured', keycloak.protect('admin'), (req, res) => {
  res.send('Secured Route for Admin');
});

app.get('/other', keycloak.protect('agent'), (req, res) => {
  res.send('Secured Route for Agent');
});

app.get('/profile', keycloak.protect(), (req, res) => {
  const user = req.kauth.grant.access_token.content;
  res.json(user);
});

app.get('/logout', keycloak.protect(), (req, res) => {
  req.kauth.grant.unstore(req);
  res.redirect('/');
});

// Connexion à MongoDB
const dbURI = "mongodb+srv://netninja:test1234@cluster0.vwf6pa7.mongodb.net/avenant?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => console.log(err));

// Middleware & fichiers statiques
app.use(express.static('public'));

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

// Redirection de la page d'accueil
app.get('/', (req, res) => {
  res.redirect(302, '/contrats'); // Utiliser res.redirect avec un code de statut 302 pour redirection temporaire
});

// Route de recherche
app.get('/search', (req, res) => {
  const termeRecherche = req.query.query;

  // Utilisez la fonction depuis le module de fonctions utilitaires
  const contratsFiltrés = contractUtils.getContractsBySearchTerm(contrats, termeRecherche);

  // Envoyez la liste filtrée des contrats au client
  res.json(contratsFiltrés);
});

// Route "about"
app.get('/about', (req, res) => {
  // Utilisez res.json() pour renvoyer du JSON au lieu de res.render()
  res.json({ title: 'About' });
});

// Routes contrats et avenants
app.use('/contrats', PolicyDetailsRoutes);
app.use('/contrats', PolicySummaryRoutes);
app.use('/policy',policyRoutes);

// Page 404
