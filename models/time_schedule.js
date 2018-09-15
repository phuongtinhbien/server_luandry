import models from ".";

export default (sequelize, DataTypes) => {
    const TimeSchedule = sequelize.define('time_schedule', {
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
        time_schedule_no :DataTypes.STRING(2000),
        time_start: DataTypes.TIME,
        time_end: DataTypes.TIME,
    })  
    return TimeSchedule;
};