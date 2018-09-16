import models from ".";
export default (sequelize, DataTypes) => {
    const WashBagDetail = sequelize.define('wash_bag_detail', {
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
        wash_bag_id: DataTypes.INTEGER,
        amount: DataTypes.INTEGER
    });
    WashBagDetail.associate = (models)=>{
        WashBagDetail.belongsTo(models.WashBag,{
            foreignKey:{
                name: 'fk_wash_bag_detail_wash_bag_id',
                field: 'wash_bag_id',
                foreignKeyConstraint: true,
            },
        }),
        WashBagDetail.belongsTo(models.ServiceType,{
            foreignKey:{
                name: 'fk_wash_bag_detail_service_type_id',
                field: 'service_type_id',
                foreignKeyConstraint: true,
            },
        }),
        WashBagDetail.belongsTo(models.UnitPrice,{
            foreignKey:{
                name: 'fk_wash_bag_detail_unit_price_id',
                field: 'unit_price_id',
                foreignKeyConstraint: true,
            },
        }),
        WashBagDetail.belongsTo(models.Unit,{
            foreignKey:{
                name: 'fk_wash_bag_detail_unit_id',
                field: 'unit_id',
                foreignKeyConstraint: true,
            },
        }),
        WashBagDetail.belongsTo(models.Label,{
            foreignKey:{
                name: 'fk_wash_bag_detail_label_id',
                field: 'label_id',
                foreignKeyConstraint: true,
            },
        }),
        WashBagDetail.belongsTo(models.Color,{
            foreignKey:{
                name: 'fk_wash_bag_detail_color_id',
                field: 'color_id',
                foreignKeyConstraint: true,
            },
        }),
        WashBagDetail.belongsTo(models.Product,{
            foreignKey:{
                name: 'fk_wash_bag_detail_product_id',
                field: 'product_id',
                foreignKeyConstraint: true,
            },
        }),
        WashBagDetail.belongsTo(models.Material,{
            foreignKey:{
                name: 'fk_wash_bag_detail_material_id',
                field: 'material_id',
                foreignKeyConstraint: true,
            },
        })
    }


    return WashBagDetail;

};