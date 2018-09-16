import models from ".";
export default (sequelize, DataTypes) => {
    const Receipt = sequelize.define('receipt', {
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
        receipt_no: DataTypes.STRING(200),

        pick_up_time: DataTypes.DATE,
        delivery_time: DataTypes.DATE
    });
    Receipt.associate = (models) => {
            Receipt.belongsTo(models.Customer, {
                foreignKey: {
                    name: 'fk_receipt_customer_id',
                    field: 'customer_id',
                    foreignKeyConstraint: true,
                },
            }),
            Receipt.belongsTo(models.Staff, {
                foreignKey: {
                    name: 'fk_receipt_receiver_id',
                    field: 'receiver_id',
                    foreignKeyConstraint: true,
                },
            }),
            Receipt.belongsTo(models.Staff, {
                foreignKey: {
                    name: 'fk_receipt_shipper_id',
                    field: 'shipper_id',
                    foreignKeyConstraint: true,
                }
            }),
            Receipt.belongsTo(models.Order, {
                foreignKey: {
                    name: 'fk_receipt_order_id',
                    field: 'order_id',
                    foreignKeyConstraint: true,
                },
            }),
            Receipt.hasMany(models.ReceiptDetail),
            Receipt.belongsToMany(models.WashBag,{
                through: 'receipt_wash_bag',
                foreignKey: {
                    name: 'fk_receipt_wash_bag_receipt_id',
                    field: 'receipt_id',
                    foreignKeyConstraint: true,
                }
            })
    }


    return Receipt;

};