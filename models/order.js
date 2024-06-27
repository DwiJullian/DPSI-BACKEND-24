
const { DataTypes } = require('sequelize');
const Order = (sequelize) => {
    return sequelize.define('Order', {
        orderID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customerID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        employeeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        shipperID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}

module.exports = Order