import models from ".";

export default (sequelize, DataTypes) => {
    const WashBag = sequelize.define('wash_bag', {
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
        wash_bag_no :DataTypes.STRING(2000),
    });
    WashBag.associate = (models)=>{
        WashBag.belongsToMany(models.WashingMachine,{
            through: 'wash',
            foreignKey: {
              name: 'fk_wash_wash_bag_id',
              field: 'wash_bag_id',
            }
        })

    }  
    return WashBag;
};