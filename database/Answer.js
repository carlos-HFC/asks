const Sequelize = require('sequelize')

const conn = require('.')

//model
const answer = conn.define('answers', {
   body: {
      type: Sequelize.TEXT,
      allowNull: false
   },
   askId: {
      type: Sequelize.INTEGER,
      allowNull: false
   }
})

//cria a tabela sincronizando o que está no banco, e não forçará a criação se a tabela já existe
answer.sync({ force: false })

module.exports = answer