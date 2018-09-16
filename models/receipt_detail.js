import models from ".";
export default (sequelize, DataTypes) => {
    const ReceiptDetail = sequelize.define('receipt_detail', {
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
        },
        receipt_id: DataTypes.INTEGER,
        service_type_id: DataTypes.INTEGER,
        amount: DataTypes.INTEGER
    });
    ReceiptDetail.associate = (models)=>{
        ReceiptDetail.belongsTo(models.Order,{
            foreignKey:{
                name: 'fk_receipt_detail_receipt_id',
                field: 'receipt_id',
                foreignKeyConstraint: true,
            },
        }),
        ReceiptDetail.belongsTo(models.ServiceType,{
            foreignKey:{
                name: 'fk_receipt_detail_service_type_id',
                field: 'service_type_id',
                foreignKeyConstraint: true,
            },
        }),
        ReceiptDetail.belongsTo(models.UnitPrice,{
            foreignKey:{
                name: 'fk_receipt_detail_unit_price_id',
                field: 'unit_price_id',
                foreignKeyConstraint: true,
            },
        }),
        ReceiptDetail.belongsTo(models.Unit,{
            foreignKey:{
                name: 'fk_receipt_detail_unit_id',
                field: 'unit_id',
                foreignKeyConstraint: true,
            },
        }),
        ReceiptDetail.belongsTo(models.Label,{
            foreignKey:{
                name: 'fk_receipt_detail_label_id',
                field: 'label_id',
                foreignKeyConstraint: true,
            },
        }),
        ReceiptDetail.belongsTo(models.Color,{
            foreignKey:{
                name: 'fk_receipt_detail_color_id',
                field: 'color_id',
                foreignKeyConstraint: true,
            },
        }),
        ReceiptDetail.belongsTo(models.Product,{
            foreignKey:{
                name: 'fk_receipt_detail_product_id',
                field: 'product_id',
                foreignKeyConstraint: true,
            },
        }),
        ReceiptDetail.belongsTo(models.Material,{
            foreignKey:{
                name: 'fk_receipt_detail_material_id',
                field: 'material_id',
                foreignKeyConstraint: true,
            },
        })
    }


    return ReceiptDetail;

};