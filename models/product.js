const { DataTypes } = require('sequelize');
const Category = require('./category');
const Supplier = require('./supplier');
const Product = (sequelize) => {
    return sequelize.define('Product', {
        ProductID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        supplierID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Supplier,
                key: "supplierID"
            }
        },
        categoryID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            References: {
                model: Category,
                key: 'categoryID'
            }
        },
        unit : {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });
}
module.exports = Product;