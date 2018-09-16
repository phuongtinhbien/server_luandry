import models from ".";
export default (sequelize, DataTypes) => {
    const UnitPrice = sequelize.define('unit_price', {
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
        apply_date:{
            type: DataTypes.DATE,
            default: Date.now()
        },
        price : DataTypes.DECIMAL,
        max_price: DataTypes.DECIMAL
    });

    UnitPrice.associate = (models)=>{
        UnitPrice.belongsTo(models.Product,{
            foreignKey:{
                name: "fk_unit_price_product_id",
                field: "product_id",
                foreignKeyConstraint: true,
            }
        }),
        UnitPrice.belongsTo(models.Unit,{
            foreignKey:{
                name: "fk_unit_price_unit_id",
                field: "unit_id",
                foreignKeyConstraint: true,
            }
        }),
        UnitPrice.belongsTo(models.ServiceType,{
            foreignKey:{
                name: "fk_unit_price_service_type_id",
                field: "service_type_id",
                foreignKeyConstraint: true,
            }
        })
    }

    return UnitPrice;
};