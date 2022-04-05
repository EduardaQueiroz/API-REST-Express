const express = require('express');  //bliblioteca que estamos chamando
const consign = require('consign');
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express() //executa o "método" expresse importado acima

    app.use(express.urlencoded({extended: true}))
    app.use(express.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}

