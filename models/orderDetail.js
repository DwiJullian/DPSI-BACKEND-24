const { DataTypes } = require('sequelize');
const OrderDetail = (sequelize) => {
    return sequelize.define('OrderDetail', {
        orderDetailID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}
module.exports = OrderDetail