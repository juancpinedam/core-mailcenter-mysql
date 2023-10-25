
const mysql = require('mysql2');
const {pool}= require("../config/mysql.js")
const { handleHttpError } = require("../utils/handleError");


const list = async (req,res)=>{     
    const user = req.body.user;
    let query = "SELECT * FROM estados ";
    pool.query(query,async function(err,result){
        if(err) throw err
        else{
            const estados = result;  
                const data = {
                    data: estados,
                    user
                }
                res.status(200)
                res.send({data});
        }       
    })
}



module.exports = {
    list
}