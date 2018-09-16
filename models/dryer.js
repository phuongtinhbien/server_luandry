export default (sequelize, DataTypes) => {
    const Dryer = sequelize.define('dryer', {
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
        dryer_no: DataTypes.STRING(200),
        bought_date: DataTypes.DATE,
        buyer : DataTypes.INTEGER
    });
    Dryer.associate = (models)=>{
        Dryer.belongsTo(models.Branch,{
            foreignKey:{
                name: 'fk_dryer_branch_id',
                field: 'branch_id',
                foreignKeyConstraint: true,
            },
        }),
        Dryer.belongsToMany(models.WashBag,{
            through: 'dry',
            foreignKey: {
              name: 'fk_dry_dry_drying_machine_id',
              field: 'drying_machine_id',
            }
        })
    }

    return Dryer;

};
