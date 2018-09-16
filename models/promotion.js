import models from ".";

export default (sequelize, DataTypes) => {
    const Promotion = sequelize.define('promotion', {
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
        promotion_name :DataTypes.STRING(2000),
        sale: DataTypes.INTEGER,
        date_start: DataTypes.DATE,
        date_end: DataTypes.DATE,
        promotion_code: DataTypes.STRING(200),
    });
    
    Promotion.associate = (models)=>{
        Promotion.belongsToMany(models.Branch,{
            through: 'promotion_branch',
            foreignKey: {
              name: 'fk_promotion_branch_promotion_id',
              field: 'promotion_id',
              foreignKeyConstraint: true,
            }
        })
    }
    return Promotion;
};