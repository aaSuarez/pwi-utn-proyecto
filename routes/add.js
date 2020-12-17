// Aqui creamos las tareas 

const express = require('express')
const router = express.Router()
const pool = require('../baseDatos/db')

const add = async(req,res)=>{
    const {name,title,description} = req.body
    const unir = { 
        name,
        title,
        description}

   await pool.query('INSERT INTO tasks SET ?',[unir])
    res.redirect('/add')}


const formulario = (req, res) =>res.render('add')


router.get('/',formulario)
router.post('/', add)

module.exports=router