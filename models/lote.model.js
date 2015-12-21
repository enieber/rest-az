'use strict';

const Leilao = require('leilao.model.js');

module.exports = function(sequelize, DataTypes, Leilao) {
    var Lote = sequelize.define('lote', {
        idLeilao: {
            type: Leilao.idLeilao,
            required: true
        },
        numero: DataTypes.INTEGER,
        descricao: {
            type: DataTypes.STRING(60),
            required: true
        },
        quantidade: DataTypes.NUMERIC,
        valor: DataTypes.NUMERIC
    });
    return Lote;
}