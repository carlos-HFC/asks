const Sequelize = require('sequelize')

const conn = require('.')

//model
const ask = conn.define('asks', {
   title: {
      type: Sequelize.STRING,
      allowNull: false
   },
   description: {
      type: Sequelize.TEXT,
      allowNull: false
   }
})

//cria a tabela sincronizando o que está no banco, e não forçará a criação se a tabela já existe
ask.sync({ force: false }).then(() => console.log('tabela asks'))

module.exports = ask