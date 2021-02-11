const mongoose = require('mongoose');
const Product = require('../models/Product');

exports.get = async() => {
    const res = await Product
    .find({
    }, 'title price slug description tags image1 image2 image3 image4')
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
    }, 'title price description tags slug')
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
                image1: data.image1,
                image2: data.image2,
                image3: data.image3,
                image4: data.image4
            }
        })
}

exports.delete = async(id) => {
    await Product
    .findByIdAndDelete(id);
}
