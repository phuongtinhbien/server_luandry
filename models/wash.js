import models from ".";

export default (sequelize, DataTypes) => {
    const Wash = sequelize.define('wash', {
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
        wash_bag_id :DataTypes.INTEGER,
        washing_machine_id: DataTypes.INTEGER
    });

    Wash.associate = (models)=>{
        Wash.belongsTo(models.WashBag),{
            foreignKey:{
                name: 'fk_wash_wash_bag_id',
                field: 'wash_bag_id',
                foreignKeyConstraint: true,
            },
        },
        Wash.belongsTo(models.WashingMachine),{
            foreignKey:{
                name: 'fk_wash_wash_washing_machine_id',
                field: 'washing_machine_id',
                foreignKeyConstraint: true,
            },
        }
        
    };
    return Wash;
};