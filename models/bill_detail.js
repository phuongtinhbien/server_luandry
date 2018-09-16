import models from ".";
export default (sequelize, DataTypes) => {
    const BillDetail = sequelize.define('bill_detail', {
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
        note: DataTypes.STRING(4000),
        amount: DataTypes.INTEGER
    });
    BillDetail.associate = (models)=>{
        BillDetail.belongsTo(models.Bill,{
            foreignKey:{
                name: 'fk_bill_detail_bill_id',
                field: 'bill_id',
                foreignKeyConstraint: true,
            },
        }),
        BillDetail.belongsTo(models.ServiceType,{
            foreignKey:{
                name: 'fk_bill_detail_service_type_id',
                field: 'service_type_id',
                foreignKeyConstraint: true,
            },
        }),
        BillDetail.belongsTo(models.UnitPrice,{
            foreignKey:{
                name: 'fk_bill_detail_unit_price_id',
                field: 'unit_price_id',
                foreignKeyConstraint: true,
            },
        }),
        BillDetail.belongsTo(models.Unit,{
            foreignKey:{
                name: 'fk_bill_detail_unit_id',
                field: 'unit_id',
                foreignKeyConstraint: true,
            },
        }),
        BillDetail.belongsTo(models.Label,{
            foreignKey:{
                name: 'fk_bill_detail_label_id',
                field: 'label_id',
                foreignKeyConstraint: true,
            },
        }),
        BillDetail.belongsTo(models.Color,{
            foreignKey:{
                name: 'fk_bill_detail_color_id',
                field: 'color_id',
                foreignKeyConstraint: true,
            },
        }),
        BillDetail.belongsTo(models.Product,{
            foreignKey:{
                name: 'fk_bill_detail_product_id',
                field: 'product_id',
                foreignKeyConstraint: true,
            },
        }),
        BillDetail.belongsTo(models.Material,{
            foreignKey:{
                name: 'fk_bill_detail_material_id',
                field: 'material_id',
                foreignKeyConstraint: true,
            },
        })
    }
    return BillDetail;

};