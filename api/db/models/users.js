const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require("../database");

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique:true,
            autoIncrement: true,
        }
        ,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
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
    User,
}