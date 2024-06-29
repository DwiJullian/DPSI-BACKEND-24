const { DataTypes } = require('sequelize');
const Category = (sequelize) => {
    return sequelize.define('Category', {
        categoryID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        CategoryName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
}

module.exports = Category;