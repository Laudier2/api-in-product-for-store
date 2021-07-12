const mongoose = require('mongoose');
const Product = require('../models/Product');

exports.get = async() => {
    const res = await Product
    .find({
    }, 'title price slug description image1 image2 image3 cor tags')
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product.findOne({
        slug: slug,
    }, 'title price description tags slug')
    return res;
}

exports.getBayId = async(id) => {
    const res = await Product.findById(id);
    return res;
}

exports.getByTag = async(tag) => {
    const res = await Product.find({
        tags: tag,
    }, 'title price description tags slug cor')
    return res;
}

exports.create = async(data) => {
    const product = new Product(data)
    await product.save();
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug,
                tags: data.tags,
                image1: data.image1
            }
        })
}

exports.delete = async(id) => {
    await Product
    .findByIdAndDelete(id);
}
