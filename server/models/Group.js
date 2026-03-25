const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Group extends Model {
        static associate(models) {
            // Define associations here
        }
    }
    Group.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        admin_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        statut: {
            type: DataTypes.ENUM('ACTIF', 'INACTIF', 'ARCHIVE'),
            defaultValue: 'ACTIF',
        },
    }, {
        sequelize,
        modelName: 'Group',
        timestamps: true,
    });
    return Group;
};