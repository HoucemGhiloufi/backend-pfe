const PolicySummary = require('../models/PolicySummary'); // Assurez-vous que le chemin est correct
const PolicyDetails = require('../models/policyDetails');

const PolicySummary_index = (req, res) => {
  const idPolicyDetails = req.params.idPolicyDetails;
  PolicySummary.find({ contrat: idPolicyDetails }).sort({ createdAt: -1 })
    .then(result => {
      res.json({ PolicySummaries: result, title: 'All avenants' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
}

const getPolicySummaryByPolicyDetails = async (req, res) => {
  const idPolicyDetails = req.params.idPolicyDetails;
  const idPolicySummary = req.params.idPolicySummary;

  try {
    // Vérifiez si le contrat existe
    const policyDetails = await PolicyDetails.findById(idPolicyDetails);

    if (!policyDetails) {
      return res.status(404).json({ success: false, error: 'Contrat not found' });
    }

    // Recherchez l'avenant associé à ce contrat
    const policySummary = await PolicySummary.findOne({ _id: idPolicySummary, contrat: idPolicyDetails });

    if (!policySummary) {
      return res.status(404).json({ success: false, error: 'Avenant not found for this Contrat' });
    }

    // Renvoyez les détails de l'avenant
    res.json({ success: true, avenant: policySummary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const PolicySummary_create_get = (req, res) => {
  res.json({ title: 'Create a new avenant' });
};

const PolicySummary_create_post = async (req, res) => {
  try {
    const { title, snippet, body, PolicyDetailsId } = req.body;
    const policyDetails = await PolicyDetails.findById(PolicyDetailsId);

    if (!policyDetails) {
      return res.status(404).json({ message: "Contrat non trouvé." });
    }

    const newPolicySummary = new PolicySummary({
      title, snippet, body,
      contrat: PolicyDetailsId
    });

    const savedPolicySummary = await newPolicySummary.save();

    // Ajouter l'ID de l'avenant au contrat correspondant
    policyDetails.avenants.push(savedPolicySummary._id);
    await policyDetails.save();

    res.status(201).json(savedPolicySummary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'avenant." });
  }
};

const PolicySummary_delete = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPolicySummary = await PolicySummary.findByIdAndDelete(id);

    if (!deletedPolicySummary) {
      return res.status(404).json({ success: false, error: 'PolicySummary not found' });
    }

    res.json({ success: true, redirect: `/contrats/${deletedPolicySummary.idPolicyDetails}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  PolicySummary_index,
  getPolicySummaryByPolicyDetails,
  PolicySummary_create_get,
  PolicySummary_create_post,
  PolicySummary_delete
};
