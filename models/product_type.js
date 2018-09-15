import models from ".";

export default (sequelize, DataTypes) => {
    const ProductType = sequelize.define('product_type', {
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
        product_type_name :DataTypes.STRING(2000),
        display_order: DataTypes.INTEGER,
    });
    ProductType.associate = (models)=>{
        ProductType.hasMany(models.Product)
    }
    return ProductType;
};