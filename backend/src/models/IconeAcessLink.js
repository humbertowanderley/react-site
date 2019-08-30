const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const IconeAcessLinkSchema = new Schema({

    //Link info
    link_name: {
        type: String,
        required: true
    },
    // Upload/download: A -> B, in Mbps
    link_upload: {
        type: Number,
        default: 0
    },
    link_download: {
        type: Number,
        default: 0
    },
    link_status: {
        type: String,
        default: "down"
    },

    link_speed: {
        type: Number,
        default: 0
    },

    link_group:{
        type: String,
        default: ""

    },

    link_graphs: {
        type: String,
        default: ""
    },
    link_coordinates: [{
        type: Array,
        required: true
    }],


}, { timestamps: true });

module.exports = model('IconeAcessLink', IconeAcessLinkSchema);