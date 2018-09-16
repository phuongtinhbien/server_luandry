import models from ".";
export default (sequelize, DataTypes) => {
    const Bill = sequelize.define('bill', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: DataTypes.STRING(200),
        create_by: DataTypes.INTEGER,
        update_by: DataTypes.INTEGER,
        create_date: {
            type: DataTypes.DATE,
            default: Date.now()
        },
        update_date: {
            type: DataTypes.DATE,
            default: Date.now()
        },
        bill_no: DataTypes.STRING(200)
    });
    Bill.associate = (models) => {
            Bill.belongsTo(models.Customer, {
                foreignKey: {
                    name: 'fk_bill_customer_id',
                    field: 'customer_id',
                    foreignKeyConstraint: true,
                },
            }),
            Bill.belongsTo(models.Order, {
                foreignKey: {
                    name: 'fk_bill_order_id',
                    field: 'order_id',
                    foreignKeyConstraint: true,
                },
            }),
            Bill.belongsTo(models.Receipt, {
                foreignKey: {
                    name: 'fk_bill_receipt_id',
                    field: 'receipt_id',
                    foreignKeyConstraint: true,
                },
            }),
            Bill.belongsTo(models.Payment, {
                foreignKey: {
                    name: 'fk_bill_payment_id',
                    field: 'payment_id',
                    foreignKeyConstraint: true,
                },
            }),
            Bill.hasMany(models.BillDetail)
            
    }


    return Bill;

};