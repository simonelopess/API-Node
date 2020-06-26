'use strict'


const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res, next)=>{
  res.status(200).send({
    title: "Node Store API", 
    version: "0.0.1"
  });
});


//CRUD
router.post('/', (req, res, next)=>{
  res.status(201).send(req.body);  //201 - metodo created 
});

router.put('/:id', (req, res, next)=>{
  const id = req.params.id;
  res.status(201).send({
      id: id,
      item: req.body});  //201 - metodo created 
});

router.delete('/', (req, res, next)=>{
  res.status(200).send(req.body);  //201 - metodo created 
});



module.exports = router;