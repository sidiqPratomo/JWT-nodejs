const CustomApiError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')


const authMiddleware = async (req, res, next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomApiError('no token provided',401)
    }

    const token = authHeader.split(' ')[1]

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
        next()
    }catch (error){
        throw new CustomApiError('not authorized to access this route',401)
    }    
}

module.exports = authMiddleware;