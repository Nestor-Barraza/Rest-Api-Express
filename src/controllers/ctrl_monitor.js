//------Require Modules---------//
const monitorCtrl = {};
const colors = require('colors');


//------Model-------//

const Monitor = require('../models/monitor.js');





//Created Monitor

monitorCtrl.createMonitor = (req, res) => {
    
    Monitor.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        program: req.body.program,
        semester: req.body.semester,
        documentnumber: req.body.documentnumber,
        phone: req.body.phone,
        email: req.body.email,
        birthday: req.body.birthday,
        address: req.body.address,
        homenumber: req.body.homenumber,
    }).then(Monitor => {
        res.json(Monitor);
    });



};

//Render Monitors

monitorCtrl.renderAllMonitors = (req, res) => {
    Monitor.findAll().then(Monitor => {
        res.json(Monitor);
    })
};

monitorCtrl.renderById = (req, res) => {
    Monitor.findByPk(req.params.id).then(Monitor => {
        res.json(Monitor);
    })
};

//Upload Monitor

monitorCtrl.editMonitor =  (req, res) => {
    Monitor.update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        program: req.body.program,
        semester: req.body.semester,
        documentnumber: req.body.documentnumber,
        phone: req.body.phone,
        email: req.body.email,
        birthday: req.body.birthday,
        address: req.body.address,
        homenumber: req.body.homenumber,
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(error => {
        console.log('Sigue intentando'.yellow, error);
    });


};

//Delete Monitor

monitorCtrl.deleteMonitor = (req, res) => {
    Monitor.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });


};



//------Export Module---------//

module.exports = monitorCtrl;