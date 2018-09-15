import models from ".";

export default (sequelize, DataTypes) => {
    const ColorGroup = sequelize.define('color_group', {
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
        color_group_name :DataTypes.STRING(2000),
        color_group_no: DataTypes.STRING(200)
    })

    ColorGroup.associate=( models) =>{
        ColorGroup.hasMany(models.Color);
    }
    
    return ColorGroup;
};