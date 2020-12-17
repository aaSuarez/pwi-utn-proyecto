const auth = (req,res,next) => {
   
    // compruebo la session creada
req.session.idUser ? (console.log('este es nuevo'),next()) : res.redirect('/login')

    // no creada -> 401 o ->login
}
module.exports = {auth}