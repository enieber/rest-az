const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port : 3000 });

const DataTypes = require('sequelize');
const sequelize = new DataTypes('az', 'postgres', 'Obone1',{
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});
const Empresa = require('./models/empresa.model.js');
const Leilao = require('./models/leilao.model.js')(sequelize, DataTypes, Empresa);
const Lote = require('./models/lote.model.js')(sequelize, DataTypes, Leilao);
const Comprador = require('./models/comprador.model.js')(sequelize, DataTypes, Empresa, Leilao);

server.start(function() {
  console.log('Running on 3000');
});
