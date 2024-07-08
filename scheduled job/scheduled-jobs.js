const schedule = require('node-schedule');
const Avenant = require('../models/avenant'); // Import Avenant model
const data = require('../mock/data');

// Define a function to handle the transition of Avenants
async function transitionAvenants() {
    schedule.scheduleJob('*/1 * * * *', async () => {
        try {
            for (const contract of data) {
                const authorizableData = contract.authorizable.data;
                let requestAllowed = authorizableData.requestAllowed;

                const untreatedAvenants = await Avenant.find({ transactionType: 'REQUEST', treated: false, policyNumber: contract.policyNumber });
                const untreatedEndorsementAvenants = await Avenant.findOne({ transactionType: 'ENDORSEMENT', treated: false, policyNumber: contract.policyNumber });

                if (untreatedAvenants.length > 0 && untreatedEndorsementAvenants) {
                    console.log("Processing contract:", contract.policyNumber);

                    requestAllowed = true;

                    untreatedAvenants.sort((a, b) => a.createdAt - b.createdAt);
                    const firstAvenant = untreatedAvenants[0];

                    await Avenant.findOneAndUpdate({ _id: firstAvenant._id }, { transactionType: 'ENDORSEMENT' });
                    console.log('Updated first Avenant transactionType to ENDORSEMENT');
                    await Avenant.findOneAndUpdate({_id:untreatedEndorsementAvenants._id},{treated: true});
                }
                 if (untreatedAvenants.length === 0 && untreatedEndorsementAvenants) {
                    requestAllowed = false;

                    await Avenant.findOneAndUpdate({ _id: untreatedEndorsementAvenants._id }, { treated: true });
                    console.log('Endorsement Avenant processed:', untreatedEndorsementAvenants._id);
                } 
                if (!untreatedAvenants.length && !untreatedEndorsementAvenants) {
                    requestAllowed = false;
                }

                console.log('Request Allowed for contract', contract.policyNumber + ':', requestAllowed);
            }
        } catch (error) {
            console.error('Error in transitioning Avenants:', error);
        }
    });
}

module.exports = { transitionAvenants };
