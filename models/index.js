import Sequelize from "sequelize";

const sequelize = new Sequelize("laundry_schema", "postgres", "admin",{
    dialect: 'postgres',
    
    define:{
        timestamps: false,
        freezeTableName: true,
        underscored:true
    }

  });

const models = {
    Customer: sequelize.import("./customer"),
    Store: sequelize.import("./store"),
    Branch: sequelize.import("./branch"),
    Unit: sequelize.import("./unit"),
    ColorGroup: sequelize.import("./color_group"),
    Color: sequelize.import("./color"),
    Label: sequelize.import("./label"),
    Material: sequelize.import("./material"),
    Payment: sequelize.import("./payment"),
    TimeSchedule: sequelize.import("./time_schedule"),
    Promotion: sequelize.import("./promotion"),
    ProductType: sequelize.import("./product_type"),
    Product: sequelize.import("./product"),
    StaffType: sequelize.import("./staff_type"),
    Staff: sequelize.import("./staff"),
    WashingMachine: sequelize.import("./washing_machine"),
    WashBag: sequelize.import("./wash_bag"),
    Dryer: sequelize.import("./dryer"),
    ServiceType: sequelize.import("./service_type"),
    UnitPrice: sequelize.import("./unit_price"),
    Order: sequelize.import("./order"),
    OrderDetail: sequelize.import("./order_detail"),
    Receipt: sequelize.import("./receipt"),
    ReceiptDetail: sequelize.import("./receipt_detail"),
    WashBagDetail: sequelize.import("./wash_bag_detail"),
    Bill: sequelize.import("./bill"),
    Bill: sequelize.import("./bill_detail"),

};

Object.keys(models).forEach((modelName) => {
  
    if ('associate' in models[modelName]){
        models[modelName].associate(models);
    }
    
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;