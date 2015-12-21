'use strict';

module.exports = function Comprador(sequelize, DataTypes, Empresa, Leilao) {
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