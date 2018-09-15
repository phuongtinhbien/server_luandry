import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import models from './models';
import typeDefs from './schema';
import resolvers from './resolvers';
const schemaMine = makeExecutableSchema({
    typeDefs,
    resolvers
  });

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

models.sequelize.sync({}).then(() => {
  app.listen(8081,(err)=>{
    if (err != null)
      console.error();
    else
      console.log("------------------------------------------------------------")
      console.log("Successfully!!!");
  });
});
