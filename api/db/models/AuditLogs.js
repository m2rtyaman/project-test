const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require("../database");

const AuditLogs = sequelize.define(
    'AuditLogs',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique:true,
            autoIncrement: true,
        },
        level: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        proc_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        log: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            
        },
        updated_at: {
            type:  DataTypes.DATE,
            allowNull: false,
        },
    },{
        timestamps:true,
        
    }
);

module.exports={
    AuditLogs,
}