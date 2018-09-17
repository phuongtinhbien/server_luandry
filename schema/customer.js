export default `
  scalar Date
  type Customer {
    id: Int!
    username: String
    email: String
    customer_no: String
    full_name: String
    password: String
    gender:Boolean
    address: String
    phone: String
    status: Boolean
    hash_code: String
    lock_status: Boolean
    lock_time: Int
    timelock: Date
    create_by: Int
    update_by: Int
    create_date: Date
    update_date: Date
    order: [Order!]
    }
  type Query {
    getCustomer(id: Int!): Customer!
    allCustomer: [Customer!]!
  }
  type Mutation {
    createCustomer(
      username: String!, 
      email: String!, 
      customer_no: String!,
      full_name:String,
      password: String!,
      gender:Boolean,
      address: String!,
      phone: String!,
      status: Boolean,
      hash_code: String!,
      lock_status: Boolean,
      lock_time: Int!,
      timelock: Date,
      create_by: Int!,
      update_by: Int!,
      ): Customer!
  }
`;