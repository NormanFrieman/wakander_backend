// Update with your config settings.
require("dotenv/config");

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || require("./config.json"),
    migrations: {
      directory: __dirname + '/src/Database/migrations'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/src/Database/migrations'
    },
    useNullAsDefault: true,
  }
};