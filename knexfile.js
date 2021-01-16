// Update with your config settings.
require("dotenv/config");

const databaseUrl = process.env.DATABASE_URL || require("./config.json");
console.log(databaseUrl);

module.exports = {

  development: {
    client: 'pg',
    connection: databaseUrl,
    migrations: {
      directory: __dirname + '/src/Database/migrations'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: databaseUrl,
    migrations: {
      directory: __dirname + '/src/Database/migrations'
    },
    useNullAsDefault: true,
  }
};