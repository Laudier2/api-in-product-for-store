const ValidationContract = require('../validators/validator');
const repository = require('../repositories/customer-repository');

exports.post = (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, "O titulo tem que ter no minimo 3 caracter!")
    contract.isEmail(req.body.email, "É obrigatorio um email valido!")
    contract.hasMinLen(req.body.password, 6, "A senha é obrigatoria, e deve ter mais 6 caractere!")

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        repository.create(req.body);
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: "Falha ao cadastra um novo usuário!"
        })
    }
};
