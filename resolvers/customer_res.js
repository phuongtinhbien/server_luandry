export default {
    Query: {
      getCustomer: (parent, { id }, { models }) => models.Customer.findOne({ where: { id } }),
      allCustomer:  (parent, args, { models }) => models.Customer.findAll(),
    },
    Mutation: {
      createCustomer: async (parent, args, { models }) => {
        try{
           await models.Customer.create(args);
           return true;
        }
        catch(err){
          console.log(err);
          return false;
        }
        
      }
    },
  };