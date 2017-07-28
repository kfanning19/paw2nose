module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        event: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        date: {
            type: DataTypes.DATEONLY
        }
    });
    Activity.associate = function(models) {
        Activity.belongsTo(models.Pet, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Activity;
};
