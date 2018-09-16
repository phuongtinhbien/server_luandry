export default (sequelize, DataTypes) => {
    const Branch = sequelize.define('branch', {
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
        branch_name:{
            type: DataTypes.STRING(2000)
        },
        address: DataTypes.STRING(4000),
        branch_no: DataTypes.STRING(200)
    });
    Branch.associate = (models)=>{
        Branch.belongsTo(models.Store,{
            foreignKey:{
                name: 'fk_branch_store_id',
                field: 'store_id',
                foreignKeyConstraint: true,
            },
        }),
        Branch.hasMany(models.WashingMachine),
        Branch.hasMany(models.Dryer),
        Branch.belongsToMany(models.ServiceType,{
            through: 'service_type_branch',
            foreignKey: {
              name: 'fk_service_type_branch_branch_id',
              field: 'branch_id',
              foreignKeyConstraint: true,
            }
        }),
        Branch.belongsToMany(models.Promotion,{
            through: 'promotion_branch',
            foreignKey: {
              name: 'fk_promotion_branch_branch_id',
              field: 'branch_id',
              foreignKeyConstraint: true,
            }
        })
    }


    return Branch;

};
