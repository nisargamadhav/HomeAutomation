
var mongoose = require('mongoose');
// Setup schema
var deviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

var Device = module.exports = mongoose.model('device', deviceSchema);
module.exports.get = function (callback, limit) {
    Device.find(callback).limit(limit);
}