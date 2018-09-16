import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models from './models';
import path from 'path';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { models }
});
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json());
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
