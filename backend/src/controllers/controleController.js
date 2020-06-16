const Controle = require('../../models/controle')
const Op = require('Sequelize').Op

module.exports={

    async index(req, res){
       const {dataRegistro, vlan} = req.body
       const userRquest = await  Controle.findAll({where:{created_at:dataRegistro,Vlan:vlan}})
       if(!userRquest){
           return res.status(401).send('<h1>Nenhum usuario registrado</h1>')
       }else{
           return res.status(200).send(userRquest)
       }
    },

    async store(req, res){
        const {UserID,Username,Interface,IPaddress,MAC,Vlan,IPv6,AccessType} = req.body
        try {
            const userCreate = await Controle.create({UserID,Username,Interface,IPaddress,MAC,Vlan,IPv6,AccessType})
            return res.status(200).send(userCreate)
        } catch (error) {
            return res.status(404).send({error: error})
        }       
    },
    async store(req, res){
                
    },
    async store(req, res){
                
    }
}