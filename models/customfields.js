const mongoose = require('mongoose');

const customfieldsSchema = new mongoose.Schema({
    code: String,
    data: [{
        identifier: String,
        code: String,
        editable: Boolean,
        label: String,
        customFieldValue: { type: String },
        mandatory: Boolean,
        customFieldType: String,
        customFieldsPossibleValues: [{
            code: String,
            id: String,
            label: String
        }]
    }]
});

module.exports = mongoose.model('customfields', customfieldsSchema);
