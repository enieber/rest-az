'use strict';

const Empresa = require('empresa.model.js');
const Leilao = require('leilao.model.js');

Comprador.exports = function(sequelize, DataTypes, Empresa, Leilao) {
    var Comprador = sequelize.define('comprador', {
        idComprador: {
            type: DataTypes.INTEGER,
            required: true,
            unique: true
        },
        idEmpresa: {
            type: Empresa.idEmpresa,
            required: true
        },
        idLeilao: {
            type: Leilao.idLeilao,
            required: true
        }
    });

    return Comprador;
}