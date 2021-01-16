// Update with your config settings.
require("dotenv/config");
const config = require("./config.json");

const databaseConfig = process.env.DATABASE_URL || config;

module.exports = {

  development: {
    client: 'pg',
    connection: databaseConfig,
    migrations: {
      directory: __dirname + '/src/Database/migrations'
    },
    seeds: {
      directory: __dirname + './src/Database/seeds'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/src/Database/migrations'
    },
    seeds: {
      directory: __dirname + './src/Database/seeds'
    },
    useNullAsDefault: true,
  }
};