// pedimos las tareas a la DB y las renderizamos

const express = require('express')
const router = express.Router();
const pool = require('../baseDatos/db')

// crear tareas mandar a la vista 
const task = async(req,res) =>{
    const tasks = await pool.query('SELECT * FROM tasks')
    res.render('tasks',{tasks})
    console.log(tasks)
}
// ********************


// borrar tareas
router.get('/delet/:id',async(req,res)=>{
    const {id} = req.params
  await  pool.query('DELETE FROM tasks WHERE id = ?',[id])
  res.redirect('/tasks')
 })
// *********************

router.get('/edit/:id',async(req,res)=>{
    const {id} = req.params
  const [tasks] = await pool.query('SELECT * FROM tasks WHERE ID = ?',[id])
    res.render('edit',{tasks})
    
})

router.post('/edit/:id',async(req,res)=>{
    const {id} = req.params
    const {name,title,description} = req.body
    const newLink = { 
        name,
        title,
        description
    }
   await  pool.query('UPDATE tasks SET ? WHERE ID = ?',[newLink,id])

   console.log(newLink)
   res.redirect('/tasks')
})

router.get('/',task)

module.exports=router