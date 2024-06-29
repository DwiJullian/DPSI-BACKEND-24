
const { DataTypes } = require('sequelize');
const Order = require('./order')
const Product = require('./product')
const OrderDetail = (sequelize) => {
    return sequelize.define('OrderDetail', {
        orderDetailID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Order,
                key:'orderID'
            }
        },
        productID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key:'productID'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}
module.exports = OrderDetail