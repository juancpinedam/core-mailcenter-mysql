const jwt= require("jsonwebtoken")
require("dotenv").config()

const JWT_SECRET = process.env.JWT_SECRET

const verifyToken = async (tokenJWT)=>{

    try{
        return jwt.verify(tokenJWT, JWT_SECRET)
    }catch(e){
        console.log(e)
        return null
    }
    
}
const tokenSing = async (user)=>{
    const sing = await jwt.sign(
        {
            id:user.id,
            name:user.name
        },
        JWT_SECRET,
        {
            expiresIn:"2h"
        }
    )

    return sing;
}


module.exports = {tokenSing,verifyToken}