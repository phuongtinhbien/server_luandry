export default (sequelize, DataTypes) => {
    const Store = sequelize.define('store', {
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
        store_name:{
            type: DataTypes.STRING(2000)
        },
        address: DataTypes.STRING(4000)
    });

    Store.associate = (models)=>{
        Store.hasMany(models.Branch)
    }
    return Store;
};