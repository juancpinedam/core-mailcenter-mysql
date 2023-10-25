
const mysql = require('mysql2');
const {pool}= require("../config/mysql.js")
const { encrypt, compare } = require("../utils/HandlePassword")
const { tokenSing } = require("../utils/HandleJWT");




const register = async (req,res)=>{     
    const name = req.body.name; 
    const email = req.body.email; 
    let password = req.body.password;
    password = await encrypt(password);
   // console.log(req)
    let insertQuery = "INSERT INTO users (name,email,password) VALUES (?,?,?)";
    let query = mysql.format(insertQuery,[name,email,password])
    
    pool.query(query,async function(err,result){
        if(err){
            console.log("erroreeee")
            res.status(403)
            res.send({"error":err});
        }
        else{
            const user = result;            
                const data = {
                    token: await tokenSing(user),
                    user        
                }
                res.status(200)
                res.send({data});
        }       
    })
}



const login = async (req,res)=>{     
    const name = req.body.name;
   // console.log(req)
    let query = "SELECT * FROM users where name = '"+name+"' ";
    pool.query(query,async function(err,result){
        if(err) throw err
        else{
            const user = result[0];            
            const password = req.body.password;
            const hashPassword = user.password
            const check = await compare(password,hashPassword)
            console.log(check)
            if(check){
                const data = {
                    token: await tokenSing(user),
                    user        
                }
                res.status(200)
                res.send({data});
            } 
        }       
    })
}



module.exports = {
    login,register
}