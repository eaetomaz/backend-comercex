const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

console.log('Tipo de sequelize:', sequelize.constructor?.name || typeof sequelize);


const Estoque = sequelize.define('estoque', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    produto: { type: DataTypes.STRING},
    datahoracadastro: { type: DataTypes.DATE },
    quantidade: { type: DataTypes.DOUBLE},
    precocusto: { type: DataTypes.DOUBLE},
    perclucro: { type: DataTypes.DOUBLE},
    precovenda: { type: DataTypes.DOUBLE},
    quatidadevendida: { type: DataTypes.DOUBLE}
}, {
    tableName: 'testoque',    
    timestamps: false,
});

module.exports = Estoque;