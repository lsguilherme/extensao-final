import mysql from "mysql2";

export const db = mysql.createConnection({
    host: 'localhost',
    port: '3309',
    user: 'root',
    password: 'root',
    database: 'extensao_final'
});