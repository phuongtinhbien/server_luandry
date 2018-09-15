import models from ".";

export default (sequelize, DataTypes) => {
    const StaffType = sequelize.define('staff_type', {
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
        staff_type_name :DataTypes.STRING(2000),
        staff_type_no: DataTypes.STRING(200)
    });

    StaffType.associate=( models) =>{
        StaffType.hasMany(models.Staff);
    }
    
    return StaffType;
};