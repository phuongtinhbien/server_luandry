import models from ".";

export default (sequelize, DataTypes) => {
    const PromotionBranch = sequelize.define('promotion_branch', {
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

    PromotionBranch.associate = (models)=>{
        PromotionBranch.belongsTo(models.Promotion,{
            foreignKey:{
                name: 'fk_promotion_branch_promotion_id',
                field: 'promotion_id',
                foreignKeyConstraint: true,
            },
        })
        PromotionBranch.belongsTo(models.Branch,{
            foreignKey:{
                name: 'fk_promotion_branch_branch_id',
                field: 'branch_id',
                foreignKeyConstraint: true,
            },
        })
        
    };
    return PromotionBranch;
};