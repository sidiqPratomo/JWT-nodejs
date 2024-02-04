const CustomApiError = require('../errors/custom-error')


const login = async (req, res)=>{
    const {username, password} = req.body
    console.log(username, password)
    if(!username||!password){
        throw new CustomApiError('please provide valid username and password',400)
    }
    res.send('Fake Login/Register/Signup routes')
}

const dashboard = async (req, res)=>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: 'success, hello boss...', secret: `here is your secret number is ${luckyNumber}`})
}

module.exports ={login, dashboard};