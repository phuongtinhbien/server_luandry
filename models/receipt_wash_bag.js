import models from ".";

export default (sequelize, DataTypes) => {
    const ReceiptWashBag = sequelize.define('receipt_wash_bag', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        status: DataTypes.STRING(200),
        create_by: DataTypes.INTEGER,
        update_by: DataTypes.INTEGER,
        create_date:{
            type: DataTypes.DATE,
            default: Date.now()
        },
        update_date:{
            type: DataTypes.DATE,
            default: Date.now()
        }
    });

    ReceiptWashBag.associate = (models)=>{
        ReceiptWashBag.belongsTo(models.Receipt,{
            foreignKey:{
                name: 'fk_receipt_wash_bag_receipt_id',
                field: 'receipt_id',
                foreignKeyConstraint: true,
            },
        }),
        ReceiptWashBag.belongsTo(models.WashBag,{
            foreignKey:{
                name: 'fk_receipt_wash_bag_wash_bag_id',
                field: 'wash_bag_id',
                foreignKeyConstraint: true,
            },
        })
        
    };
    return ReceiptWashBag;
};