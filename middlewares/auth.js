const auth = (req,res,next) => {
   
    // compruebo la session creada
req.session.idUser ? (next()) : res.redirect('/login')

    // no creada -> 401 o ->login
}
module.exports = {auth}