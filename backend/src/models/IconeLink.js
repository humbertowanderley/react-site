const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const IconeLinkSchema = new Schema({

    //Client A info

    clientA_name: {
        type: String,
        required: true
    },
    clientA_initials: {
        type: String,
        required: true,
    },
    clientA_ip: {
        type: String,
        required: true,
        unique: true
    },
    clientA_interface: {
        type: String,
        required: true
    },
    clientA_status: {
        type: String,
        default: "down"
    },

    clientA_graphs: {
        type: String,
        default: ""
    },
    clientA_coordinates: {
        type: Array,
        required: true,
    },
    //Client B info
    clientB_name: {
        type: String,
        required: true
    },
    clientB_initials: {
        type: String,
        required: true,
    },
    clientB_ip: {
        type: String,
        required: true,
        unique: true
    },
    clientB_interface: {
        type: String,
        required: true
    },
    clientB_status: {
        type: String,
        default: "down"
    },

    clientB_graphs: {
        type: String,
        default: ""
    },
    clientB_coordinates: {
        type: Array,
        required: true,
    },

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

module.exports = model('IconeLink', IconeLinkSchema);