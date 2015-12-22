'use strict';

module.exports = function(sequelize, DataTypes, Empresa, Leilao) {
    var Comprador = sequelize.define('comprador', {
        idComprador: {
            type: DataTypes.INTEGER,
            required: true,
            unique: true
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
            required: true
        },
        idLeilao: {
            type: DataTypes.INTEGER,
            required: true
        }
    });

    Comprador.sync().then(function (){
      console.log("Comprador ok");
    });
    return Comprador;
}
