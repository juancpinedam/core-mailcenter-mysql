const { verifyToken } = require("../utils/HandleJWT")
const users = require("../models/Users")
const mysql = require('mysql2');
const {pool}= require("../config/mysql.js")


const authMiddleWare = async (req,res,next)=>{

    try {
        const auth = req.headers.authorization;
        if(!auth){
            res.status(403);
            res.send({ error: "NO VINO EL AUTH" });
            return;
        }

        const token = auth.split(' ').pop();
        const dataToken = await verifyToken(token);
        if(!dataToken.id){
            console.log("1")
            res.status(403);
            res.send({ error: "no tiene el IDdddd" });
        }
        else{            
            const name = dataToken.name
            let query = "SELECT id, name, email FROM users where name = '"+name+"' ";
            pool.query(query,async function(err,result){
                if(err) throw err
                else{
                    const user = result[0];   
                    req.body.user = user
                    next()
                }       
            })
           
            
        }

    } catch (error) {
        res.status(403);
        res.send({ error: "ALGO OCURRIO CON EL TOKEN" });
    }

}


module.exports = authMiddleWare;