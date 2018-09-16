import models from ".";
export default (sequelize, DataTypes) => {
    const Staff = sequelize.define('staff', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        staff_no: DataTypes.STRING(200),
        fullname:{
            type: DataTypes.STRING(2000)
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        username:{
            type:DataTypes.STRING(4000),
        },
        password: DataTypes.STRING(4000),
        gender:DataTypes.BOOLEAN,
        address: DataTypes.STRING(4000),
        phone: DataTypes.STRING(4000),
        status: DataTypes.BOOLEAN,
        hash_code: DataTypes.STRING(4000),
        lock_status: DataTypes.BOOLEAN,
        lock_time: DataTypes.INTEGER,
        timelock: DataTypes.DATE,
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
    Staff.associate = (models)=>{
        Staff.belongsTo(models.StaffType,{
            foreignKey:{
                name: 'fk_staff_type_id',
                field: 'staff_type_id',
                foreignKeyConstraint: true,
            },
        });
        Staff.belongsTo(models.Branch,{
            foreignKey:{
                name: 'fk_branch_id',
                field: 'branch_id',
                foreignKeyConstraint: true,
            },
        });

    }
    return Staff;
  };