const express = require('express');
const router = express.Router();




//admin

router.get('/', (req,res) => {
  
 res.send('holii')


});


module.exports = router;