import models from ".";

export default (sequelize, DataTypes) => {
    const ServiceType = sequelize.define('service_type', {
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
        service_type_name :DataTypes.STRING(2000),
        service_type_desc: DataTypes.STRING(2000)
    });
    ServiceType.associate  = (models)=>{
        ServiceType.belongsTo(models.Promotion,{
            foreignKey:{
                name: 'fk_service_type_promotion_id',
                field: 'promotion_id',
                foreignKeyConstraint: true,
            },
        });
        ServiceType.belongsToMany(models.Branch,{
            through: 'service_type_branch',
            foreignKey: {
              name: 'fk_service_type_branch_service_type_id',
              field: 'service_type_id',
              foreignKeyConstraint: true,
            }
        })
    }  
    return ServiceType;
};