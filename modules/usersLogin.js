
const pool = require('../baseDatos/db')
const T_users = 'users'

const auth = ({user,password}) => pool
.query('SELECT id FROM ?? WHERE user = ? and password = ? ',[T_users,user,password]) 
.then((result)=> result)
.catch((e)=>{})

module.exports = {auth}