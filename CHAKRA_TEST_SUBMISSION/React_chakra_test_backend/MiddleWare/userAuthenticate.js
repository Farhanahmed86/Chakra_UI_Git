const jwt = require('jsonwebtoken')

const Secret_Key = "JWT1122"

const authenticate_Token=async(req,res,next)=>{

    
    const authHeader = req.headers['authorization'];

    console.log(authHeader,"Auth HEader")
    const token = authHeader && authHeader.split(' ')[1]

    if(token===null)
        return res.status(401)


    jwt.verify(token,Secret_Key,(error,user)=>{
        if(error)
            return res.sendStatus(403)
            req.user = user

            next()
    })

}


module.exports={
    authenticate_Token
}