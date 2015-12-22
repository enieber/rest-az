'use strict';

module.exports = function(sequelize, DataTypes, Leilao) {
    var Lote = sequelize.define('lote', {
        idLeilao: {
            type: DataTypes.INTEGER,
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

    Lote.sync().then(function (){
      console.log("Lote ok");
    });

    return Lote;
}
