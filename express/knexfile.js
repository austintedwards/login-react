module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/react-login'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

}
