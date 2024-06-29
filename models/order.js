const Customer = require('./customer')
const Employee = require('./employee')
const Shipper = require('./shipper')
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
            allowNull: false,
            references: {
                model: Customer,
                key:'customerID'
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        employeeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Employee,
                key:'employeeID'
            }
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        shipperID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Shipper,
                key:'shipperID'
            }
        }
    })
}

module.exports = Order