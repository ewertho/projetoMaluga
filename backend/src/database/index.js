const Sequelize = require('sequelize')
const db_config = require('../config/database')

const Controle = require('../../models/controle')


const connection = new Sequelize(db_config)

Controle.init(connection)

module.exports = connection