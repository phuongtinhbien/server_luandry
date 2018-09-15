export default (sequelize, DataTypes) => {
    const WashingMachine = sequelize.define('washing_machine', {
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
        washing_machine_no: DataTypes.STRING(200),
        bought_date: DataTypes.DATE,
        buyer : DataTypes.INTEGER
    });
    WashingMachine.associate = (models)=>{
        WashingMachine.belongsTo(models.Branch),{
            foreignKey:{
                name: 'fk_washing_machine_branch_id',
                field: 'branch_id',
                foreignKeyConstraint: true,
            },
        },
        WashingMachine.belongsToMany(models.WashBag,{
            through: 'wash',
            foreignKey: {
              name: 'fk_wash_wash_washing_machine_id',
              field: 'washing_machine_id',
            }
        })

    }

    return WashingMachine;

};
