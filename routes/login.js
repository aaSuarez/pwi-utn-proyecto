const express = require('express')
const router = express.Router();
const pool = require('../baseDatos/db')
const sha1 = require('sha1')
const {validate} = require("../middlewares/login");
const login = (async (req, res) => {
  
    try{
        req.body.password = sha1(req.body.password)
    const { user,password} = req.body
    let insert = { user,password}
    await pool.query('INSERT INTO users SET ? ', [insert])

    // ***********
 
    
    res.redirect('/signip')

    
    }catch{
        res.render('error')
    }

})




const loginGet = ((req, res) => {
    res.render('login', )
})


router.get('/', loginGet)

router.post('/',validate, login)
module.exports = router