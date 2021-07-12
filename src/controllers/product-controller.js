const ValidationContract = require('../validators/validator');
const Repository = require('../repositories/repository')
//const bodyParser = require('body-parser');
//const mongoose = require('mongoose');


exports.post = (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, "O titulo tem que ter no minimo 3 caracter!")
    contract.hasMinLen(req.body.price, 1, "O price é obrigatorio")
    contract.hasMinLen(req.body.slug, 3, "O slog é obrigatorio!")
    contract.hasMinLen(req.body.cor, "A cor é obrigatorio!")
    contract.hasMinLen(req.body.image1, 1, "A imagem é obrigatorio!")
    contract.hasMinLen(req.body.description, 5, "A descrição tem que ter no minimo 5 caracter!")

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    Repository
        .create(req.body)
        .then(() => {
            res.status(201).send({message: 'Produto cadastrado com sucesso!' })  
        }).catch((err) => {
            res.status(400).send(`Houve um erro ${err}`)
        })
};

exports.get = async(req, res, next) => {
    try {
        var data = await Repository.get()        
        res.status(200).send(data)  
    } catch (err) {
        res.status(400).send(`Houve um erro ${err}`)
    }
};

exports.getBySlug = async(req, res, next) => {
    try{
        var data = await Repository.getBySlug(req.params.slug)
            res.status(200).send(data)  
        } catch (err) {
            res.status(400).send(`Houve um erro ${err}`)
        }
};

exports.getById = async(req, res, next) => {
    try{
        var data = await Repository.getBayId(req.params.id)
            res.status(200).send(data)  
        } catch (err) {
            res.status(400).send(`Houve um erro ${err}`)
        }
};

exports.getByTag = async(req, res, next) => {
    try{
        var data = await Repository.getByTag(req.params.tag)
            res.status(200).send(data)  
        } catch (err) {
            res.status(400).send(`Houve um erro ${err}`)
        }
};

exports.put = async(req, res, next) => {
    try{
        var data = await Repository
        .update(req.params.id, req.body)
            res.status(201).send({
                message: "Produto Atualizado com Sucesso!"
            })  
        } catch (err) {
            res.status(400).send(`Falha ao Atualiza o Produto ${err}`)
        }
};
  
exports.delete = async(req, res, next) => {
    try{
        var data = await Repository.delete(req.body.id)
        res.status(200).send({
            message: "Produto Removido com Sucesso!"
        })  
    } catch (err) {
        res.status(400).send(`Falha ao Remover o Produto ${err}`)
    }
};