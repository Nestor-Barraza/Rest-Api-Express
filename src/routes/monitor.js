//------Require Modules---------//

const express = require('express');
const router = express.Router();


//------Import Controller Monitor---------//

const {
    
    createMonitor,
    renderAllMonitors,
    renderById,
    editMonitor,
    deleteMonitor
   

   } = require('../controllers/ctrl_monitor');



//create Monitor

router.post('/monitor', createMonitor);

//Render Monitor

router.get('/monitor', renderAllMonitors);

router.get('/monitor/:id', renderById);

//Upload Monitor

router.put('/monitor/:id', editMonitor);

//Delete Monitor

router.delete('/monitor/:id', deleteMonitor);


//------Export Module---------//

module.exports = router;