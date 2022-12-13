import { db } from "../db.js";

export const getUsers = (_, response) =>{
    const busca = "SELECT * FROM usuarios";

    db.query(busca, (err, data) => {
        if(err) return response.json(err);

        return response.status(200).json(data);
    })
}

export const getLogin = (request, response) =>{
    const q = `SELECT * FROM usuarios WHERE email = "${request.body.email}" AND senha = "${request.body.senha}"`;
    
    db.query(q, (err, data) => {
        if(err) return response.json(err);
        console.log(data)
        response.json(data[0])
    })
}

export const addUser = (request, response) => {
    const busca = "INSERT INTO usuarios(`nome`,`email`, `senha`) VALUES(?)";

    const values = [
        request.body.nome,
        request.body.email,
        request.body.senha
    ];

    db.query(busca, [values], (err, data) => {
        if (err) return response.json(err);
        
        return response.status(200).json("Usuário criado com sucesso!!");
    })
}

