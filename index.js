require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const { ApolloServer } = require('apollo-server-express');
// const resolvers = require('./graphql/resolvers');
const mongoDataMethods = require('./controller');
const mergeTypeDefs = require('./graphql/typeDefs/index');
const resolvers = require('./graphql/resolvers/index');

const { PORT, DB_HOST } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_HOST, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const server = new ApolloServer({
  typeDefs: mergeTypeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});

// const server = new ApolloServer({ typeDefs, resolvers, introspection: true });
server.applyMiddleware({ app });
app.listen(3333, () => { console.log(`Server is running on PORT: ${PORT}`); });
