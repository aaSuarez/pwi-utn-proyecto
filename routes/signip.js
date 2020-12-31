const express = require('express')
const router = express.Router();
const {auth} = require('../modules/usersLogin')
const sha1 = require('sha1')
const show = (req,res) => {
    res.render('signip')}


const signip = async(req,res) => {
    
try{
    req.body.password = sha1(req.body["password"]);
    const result = await auth(req.body)
   
if (result.length == 0) res.render('signip', {
    message: 'user o password incorrecto'})

// ok
let [{id}] = result
req.session.idUser = id;
res.redirect('add')
}catch{
    res.render('error')
}
    

}



router.get('/', show)
router.post('/',signip)

module.exports = router