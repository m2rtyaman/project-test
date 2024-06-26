const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require("../database");

const RolePrivileges = sequelize.define(
    'RolePrivileges',
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
        permission: {
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
    RolePrivileges,
}