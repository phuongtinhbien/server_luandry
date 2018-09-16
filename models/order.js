import models from ".";
export default (sequelize, DataTypes) => {
    const Order = sequelize.define('customer_order', {
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
        order_no: DataTypes.STRING(200),

        pick_up_date: DataTypes.DATE,
        delivery_date: DataTypes.DATE
    });
    Order.associate = (models) => {
        Order.belongsTo(models.Branch, {
                foreignKey: {
                    name: 'fk_customer_order_branch_id',
                    field: 'branch_id',
                    foreignKeyConstraint: true,
                },
            }),
            Order.belongsTo(models.Customer, {
                foreignKey: {
                    name: 'fk_customer_order_customer_id',
                    field: 'customer_id',
                    foreignKeyConstraint: true,
                },
            }),
            Order.belongsTo(models.Staff, {
                foreignKey: {
                    name: 'fk_customer_order_receiver_id',
                    field: 'receiver_id',
                    foreignKeyConstraint: true,
                },
            }),
            Order.belongsTo(models.Staff, {
                foreignKey: {
                    name: 'fk_customer_order_shipper_id',
                    field: 'shipper_id',
                    foreignKeyConstraint: true,
                }
            }),
            Order.belongsTo(models.Payment, {
                foreignKey: {
                    name: 'fk_customer_order_payment_id',
                    field: 'payment_id',
                    foreignKeyConstraint: true,
                },
            }),
            Order.belongsTo(models.TimeSchedule, {
                foreignKey: {
                    name: 'fk_customer_order_pick_up_time_id',
                    field: 'pick_up_time_id',
                    foreignKeyConstraint: true,
                },
            }),
            Order.belongsTo(models.TimeSchedule, {
                foreignKey: {
                    name: 'fk_customer_order_delivery_time_id',
                    field: 'delivery_time_id',
                    foreignKeyConstraint: true,
                },
            }),
            Order.hasMany(models.OrderDetail)
    }


    return Order;

};