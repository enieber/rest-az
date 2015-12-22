'use strict';

module.exports = function(sequelize, DataTypes, Empresa) {
    var Leilao = sequelize.define('leilao', {
        idEmpresa: {
            type: DataTypes.STRING,
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
            type: DataTypes.DATE,
            required: true
        },
        timestamps: true,
        createdAt: true,
        updatedAt: 'updateTimestamp'
    });

    Leilao.sync().then(function (){
      console.log("Leilao ok");
    });
    
    return Leilao;
}
