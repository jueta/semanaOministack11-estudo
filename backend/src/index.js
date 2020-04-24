const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // importa as rotas

const app = express();

app.use(cors());
app.use(express.json()); // funcao que avisa ao express que vamos usar arquivos .json
app.use(routes); // usa as rotas. OBS.: importante que esteja abaixo de app.use(express.json());



app.listen(3333);



/*
rotas/recursos

Metodos HTTP:

GET , POST, PUT, DELETE

Tipos de parametros:
Query: parametros nomeados enviados na rota apos "?" (filtros, paginacao)
Route: parametros utilizados para identificar recursos 
Request body: Corpo da requisicao, utilizado para criar ou alterar recursos

Banco de dados - utilizaremos SQLite pq ela baixa os arquivos no projeto

- Driver: SELECT * FROM users  --utilizando SQL
- Query builder: table('users').select('*').where()     --utilizando JS
*/
