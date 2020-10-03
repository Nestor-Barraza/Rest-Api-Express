//------Require Modules---------//

const express = require('express');
const router = express.Router();


//------Import Controller Monitor---------//

const {
    
    createMonitorias,
    renderAllMonitorias,
    renderMonitoriasById,
    editMonitorias,
    deleteMonitorias


   } = require('../controllers/ctrl_monitorias');



//create Monitorias

router.post('/monitorias', createMonitorias);

//Render Monitorias

router.get('/monitorias', renderAllMonitorias);

router.get('/monitorias/:id', renderMonitoriasById);

//Upload Monitorias

router.put('/monitorias/:id', editMonitorias);

//Delete Monitorias

router.delete('/monitorias/:id', deleteMonitorias );


//------Export Module---------//





module.exports = router;