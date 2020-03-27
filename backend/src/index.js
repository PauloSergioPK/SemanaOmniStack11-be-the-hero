const express = require('express')
const routes = require('./routes')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

/*
    Rota/Recurso


    Metodos HTTP:
    Get:Buscar uma informacao no back-end
    Post:Criar uma informacao no back-end
    Put:Alterar uma informacao no back-end
    Delete:Deletar uma informacao no back-end



    Tipos de parametros
    
    Query Params: Parametros nomeados enviados na rota apos  "?" (Filtros,paginacao)
    Route Params: Parametros utilizados para identificar recursos
    Request Body: corpo da requisicao, utilizado para criar ou alterar recuros

    SQL: MySQL,SQLite,PostgreSQL,Oracle,Microsoft SQL Server
    NOSQL : MongoDB,CouchDB,etc

    Maneiras de se comunicar
    Driver: Select * from users
    Query Builder: table('users').select('*').where()

    Entidades - BeTheHero
    - ONG
    - Casos

    Funcionalidades
    - Login de ONG  :3
    - Logout de ONG
    - Cadastro de ONG  :3
    - Cadastrar novos casos  :3
    - Deletar casos  :3
    - Listar casos especificos de uma ONG  :3
    - Listar todos os casos  :3 
    - Entrar em contato com a ONG
*/


app.listen(3333)