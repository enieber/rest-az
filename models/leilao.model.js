'use strict';

module.exports = function Leilao(sequelize, DataTypes, Empresa) {
    var Leilao = sequelize.define('leilao', {
        id_empresa: {
            type: Empresa.idEmpresa,
            required: true
        },
        codigo: {
            type: DataTypes.INTEGER,
            required: true,
            unique: true
        },
        descrição: {
            type: DataTypes.STRING(60),
            required: true
        },
        vendedor: {
            type: DataTypes.INTEGER,
            required: true
        },
        inicioPrevisto: {
            type: DataTypes.timestamp,
            required: true
        },
        timestamps: true,
        createdAt: true,
        updatedAt: 'updateTimestamp'
    });
    return Leilao;
}
