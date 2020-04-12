const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Device = new Schema(
    {
        name: { type: String, required: true },
        // time: { type: [String], required: true },
        // rating: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('devices', Device)