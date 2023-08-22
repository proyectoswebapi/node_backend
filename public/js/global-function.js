/* me */

/* ag */

async function conectar(base,puerto,clave,ip,usuario){
    const { Sequelize } = require('sequelize');
    const dbIgd = new Sequelize(base, usuario, clave, {
        host: ip,    
        dialect: 'mysql',
        port:   puerto,
        operatorsAliases: 0,
        define:{
            timestamps: false
        },
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        }
      });







        return dbIgd;
}



module.exports = {
    conectar
  }