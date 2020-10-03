//------Require Modules---------//
const monitoriasCtrl = {};
const colors = require('colors');



//------Model-------//

const Monitorias = require('../../database/models/monitorias.js');
const Monitor = require('../../database/models/monitor.js');
const { _attributes } = require('../../database/database.js');





//Created Monitorias

monitoriasCtrl.createMonitorias = (req, res) => {

    Monitorias.create({
        class: req.body.class,
        monitorId: req.body.monitorId,
        date: req.body.date,
        classroom: req.body.classroom
        
    }).then(Monitorias => {
        res.json(Monitorias);
    });



};

//Render Monitorias

monitoriasCtrl.renderAllMonitorias = (req, res) => {
    Monitorias.findAll({ include: [Monitor]}).then(Monitorias => {
        res.json(Monitorias);
    })
};

monitoriasCtrl.renderMonitoriasById = (req, res) => {
    Monitorias.findByPk(req.params.id).then(Monitorias => {
        res.json(Monitorias);
    })
};

//Upload Monitorias

monitoriasCtrl.editMonitorias =  (req, res) => {
    Monitorias.update({
        class: req.body.class,
        assigned_monitor: req.body.assigned_monitor,
        date: req.body.date,
        classroom: req.body.classroom,
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(error => {
        console.log('jajaja Fallaste! :3 Revisa el código otra vez '.yellow, error);
    });


};

//Delete Monitorias

monitoriasCtrl.deleteMonitorias = (req, res) => {
    Monitorias.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });


};



//------Export Module---------//

module.exports = monitoriasCtrl;