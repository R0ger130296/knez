;
let initVar = () => {
    // process.env.CLAVE_JWT = process.env.CLAVE_JWT || 'clave de desarrollo / cambiar en producción'
    process.env.PORT = process.env.PORT || 8001
    // process.env.OPCIONES_JWT = process.env.OPCIONES_JWT || JSON.stringify({expiresIn: 60 * 20, algorithm: 'HS256', jwtid: '5', keyid: '5'})
    process.env.CLIENT = process.env.CLIENT || 'pg'
    process.env.CONNECTION_DB = process.env.CONNECTION_DB || {
                                                                host: '127.0.0.1', 
                                                                user: 'postgres', 
                                                                password: 'roger130296', 
                                                                database: 'roger1'
                                                              }
  }
  
  module.exports = {
    initVar
  }