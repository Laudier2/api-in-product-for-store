const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    image1:{
        type: String,
        required: false
    },
    image2:{
        type: String,
        required: false
    },
    image3:{
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatorio'],
        trim: true,
        index: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }]
})

module.exports = mongoose.model("Product", schema)