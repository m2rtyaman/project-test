const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require("../database");

const Categories = sequelize.define(
    'Categories',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique:true,
            autoIncrement: true,
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
    Categories,
}