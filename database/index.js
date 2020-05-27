const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

// const conn = new Sequelize('postgres://postgres:123456@localhost:5433/Perguntas')
const conn = new Sequelize(dbConfig)

module.exports = conn