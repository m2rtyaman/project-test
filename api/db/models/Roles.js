const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require("../database");

const Roles = sequelize.define(
    'Roles',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique:true,
            autoIncrement: true,
        }
        ,
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique:true,
            autoIncrement: true,
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
    Roles,
}