const {Model, DataTypes} = require('sequelize')

class Controle extends Model{
    static init(connection){
        super.init({
            UserID : DataTypes.INTEGER,
            Username : DataTypes.STRING,
            Interface: DataTypes.STRING,
            IPaddress : DataTypes.INTEGER,
            MAC : DataTypes.STRING,
            Vlan : DataTypes.STRING,
            IPv6 : DataTypes.STRING,
            AccessType : DataTypes.STRING,
            
        },{
            sequelize: connection
        })
    }
}
module.exports  = Controle