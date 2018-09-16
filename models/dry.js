import models from ".";

export default (sequelize, DataTypes) => {
    const Dry = sequelize.define('dry', {
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

    Dry.associate = (models)=>{
        Dry.belongsTo(models.WashBag,{
            foreignKey:{
                name: 'fk_dry_dry_bag_id',
                field: 'dry_bag_id',
                foreignKeyConstraint: true,
            },
        }),
        Dry.belongsTo(models.Dryer,{
            foreignKey:{
                name: 'fk_dry_dry_drying_machine_id',
                field: 'drying_machine_id',
                foreignKeyConstraint: true,
            },
        })
        
    };
    return Dry;
};