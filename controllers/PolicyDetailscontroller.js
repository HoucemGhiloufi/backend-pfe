const PolicySummary = require('../models/PolicySummary'); 
const PolicyDetails = require('../models/policyDetails');

async function PolicyDetails_index(req, res) {
  try {
    const PolicyDetails = await PolicyDetails.find();
    res.status(200).json(PolicyDetails);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const PolicyDetails_details = async (req, res) => {
  const idPolicyDetails = req.params.idPolicyDetails;
  console.log('ID Contrat:', idPolicyDetails);

  try {
    const PolicyDetails = await PolicyDetails.findById(idPolicyDetails);
    console.log('Contrat trouvé:', PolicyDetails);

    if (!PolicyDetails) {
      return res.status(404).json({ error: 'Contrat not found' });
    }

    // Récupérer les avenants liés à ce contrat
    const avenants = await PolicySummary.find({ PolicyDetails: idPolicyDetails }).sort({ createdAt: -1 });

    // Retourner les détails du contrat avec les avenants
    res.json({ PolicyDetails, avenants, title: 'Contrat Details' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const PolicyDetails_create_get = (req, res) => {
  res.render('create', { title: 'Create a new contrat' });
}


const PolicyDetails_create_post = async (req, res) => {
  const {
    PolicySummary,
    Investment,
    riskCoverages,
    riskCoverageDetails,
    reserves,
    fiscalInformation,
    beneficiaryClauses,
    bills,
    documents,
    endorsements,
    investmentValuations,
    extraPremiums,
    loans,
    specificRuleResults,
    paymentInformation
  } = req.body;

  try {
    const newPolicyDetails = new PolicyDetails({
      PolicySummary,
      Investment,
      riskCoverages,
      riskCoverageDetails,
      reserves,
      fiscalInformation,
      beneficiaryClauses,
      bills,
      documents,
      endorsements,
      investmentValuations,
      extraPremiums,
      loans,
      specificRuleResults,
      paymentInformation
    });

    await newPolicyDetails.save();

    res.status(200).json(newPolicyDetails);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = PolicyDetails_create_post;


const PolicyDetails_delete = (req, res) => {
  const id = req.params.id;
  
  PolicyDetails.findByIdAndDelete(id)
    .then(result => {
      res.status(204).json({ message: 'Contrat deleted successfully' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
}

module.exports = {
  PolicyDetails_index, 
  PolicyDetails_details, 
  PolicyDetails_create_get, 
  PolicyDetails_create_post, 
  PolicyDetails_delete
}
