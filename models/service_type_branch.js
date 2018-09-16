import models from ".";

export default (sequelize, DataTypes) => {
    const ServiceTypeBranch = sequelize.define('service_type_branch', {
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

    ServiceTypeBranch.associate = (models)=>{
        ServiceTypeBranch.belongsTo(models.ServiceType,{
            foreignKey:{
                name: 'fk_service_type_branch_service_type_id',
                field: 'service_type_id',
                foreignKeyConstraint: true,
            },
        }),
        ServiceTypeBranch.belongsTo(models.Branch,{
            foreignKey:{
                name: 'fk_service_type_branch_branch_id',
                field: 'branch_id',
                foreignKeyConstraint: true,
            },
        })
        
    };
    return ServiceTypeBranch;
};