
import { db } from "../db.js";

export const getProducts = (_, response) => {
    const q = "SELECT * FROM produtos"

    db.query(q, (err, data) => {
        if (err) return response.json(err);

        return response.status(200).json(data);
    })
}

export const addProduct = (request, response) => {
    const q = "INSERT INTO produtos(`nome`, `capacidade`, `preco`, `imagem`) VALUES(?)";

    const values = [
        request.body.nome,
        request.body.capacidade,
        request.body.preco,
        request.body.imagem
    ];

    db.query(q, [values], (err) => {
        if (err) return response.json(err);

        return response.status(200).json("Produto adicionado com sucesso!");
    })
}

export const updateProduct = (request, response) =>{
    const q = "UPDATE produtos SET `nome` = ?, `capacidade` = ?, `preco` = ?, `imagem` = ? WHERE `id` = ?";

    const values = [
        request.body.nome,
        request.body.capacidade,
        request.body.preco,
        request.body.imagem
    ];

    db.query(q, [...values, request.params.id], (err) => {
        if (err) return response.json(err);
        
        return response.status(200).json("Produto alterado com sucesso!");
    })
}

export const deleteProduct = (request, response) => {
    const q = "DELETE FROM produtos WHERE `id` = ?";

    db.query(q, request.params.id, (err) => {
        if(err) return response.json(err);

        return response.status(200).json("Produto deletado com sucesso!");
    })
}