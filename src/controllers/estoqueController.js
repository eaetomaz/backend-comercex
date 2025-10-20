const Estoque = require('../models/Estoque');

exports.listar = async (req, res) => {
    try {
        const estoque = await Estoque.findAll();
        res.json(estoque);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.add = async (req, res) => {
    try {
        const { produto, quantidade, precocusto, 
            perclucro, precovenda } = req.body;

        const novoProduto = {
            produto: produto,
            datahoracadastro: new Date(),
            quantidade: quantidade,
            precocusto: precocusto,
            perclucro: perclucro,
            precovenda: precovenda            
        };

        await Estoque.create(novoProduto);

        res.status(200).json(novoProduto);

    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
};

exports.alter = async (req, res) => {
    try {
        const { id } = req.params;    

        const produtoAlterado = await Estoque.findByPk(id);

        if(!produtoAlterado)
            return res.status(404).json({ erro: "produto não encontrado" });

        await produtoAlterado.update(req.body);

        res.json(produtoAlterado);

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        const produtoExcluido = await Estoque.findByPk(id);

        if(!produtoExcluido)
            return res.status(404).json({ erro: "produto não encontrado"});

        await produtoExcluido.destroy();

        res.status(200).json({ retorno: "Produto excluído com sucesso!"});
    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
};

exports.search = async (req, res) => {
    try {
        const { id } = req.params;

        const produtoBuscado = await Estoque.findByPk(id);

        if(!produtoBuscado)
            return res.status(404).json({ erro: "produto não encontrado" });

        return res.status(200).json(produtoBuscado);

    } catch (err) {
        res.status(500).json({ erro: err.message })
    }
};