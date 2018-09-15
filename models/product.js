import models from ".";

export default (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
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
        product_name :DataTypes.STRING(2000),
        product_image: DataTypes.STRING,
        short_desc :DataTypes.STRING(200),
    });

    Product.associate = (models)=>{
        Product.belongsTo(models.ProductType,{
            foreignKey:{
                name: 'fk_product_product_type_id',
                field: 'product_type_id',
                foreignKeyConstraint: true,
            },
        })
    }

    return Product;
};