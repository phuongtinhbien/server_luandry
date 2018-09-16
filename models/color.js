import models from ".";

export default (sequelize, DataTypes) => {
    const Color = sequelize.define('color', {
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
        color_name :DataTypes.STRING(2000),
        color_no: DataTypes.STRING(200)
    });

    Color.associate=( models) =>{
        Color.belongsTo(models.ColorGroup,{
            foreignKey:{
                name: 'fk_color_color_group_id',
                field: 'color_group_id',
                foreignKeyConstraint: true,
            }
        })
    }
    return Color;
};