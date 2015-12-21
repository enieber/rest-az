const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({port: 3000})
server.register(
    [
        {
            register: require('hapi-sequelize'),
            options: {
                database: 'az',
                user: 'postgres',
                pass: 'jmj123',
                dialect: 'postgres',
                port: 5432,
                models: 'models/*.model.js',
                sequelize: {
                    define: {
                        underscoredAll: true
                    }
                }
            }
        },
    ], function(err) {
        if (err) {
            console.error('failed to load plugin');
        }
    }
);
server.start(function() {
    console.log("Server running at:", server.info.uri)
})

server.route({
    method:'GET',
    path:'/',
    handler: function(request, reply){
        reply('Hello Word!')
    }
})

server.route({
    method:'GET',
    path:'/{name}',
    handler: function(req, rep){
        rep("Hello "+encodeURIComponent(req.params.name))
    }
})