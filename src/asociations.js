const Monitorias = require('./models/monitorias');
const Monitor = require('./models/monitor');

Monitor.hasMany(Monitorias, {
    foreignKey: {
        name: 'monitorId',
        allowNull: false
    }
});
Monitorias.belongsTo(Monitor);

