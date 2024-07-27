module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'postgrestest',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'postgrestest',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
}
