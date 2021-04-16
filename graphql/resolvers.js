const graphqlFields = require('graphql-fields');
const Account = require('../models/Account');
const Post = require('../models/Post');
const PostType = require('../models/PostType');
const Status = require('../models/Status');
const ffff = require('./index');

const getMongooseSelection = (info, fieldPath = null) => {
  const selections = graphqlFields(info);
  const mgs = Object.keys(fieldPath ? selections[fieldPath] : selections).reduce((a, b) => ({ ...a, [b]: 1 }), {});
  return mgs;
};

const resolvers = {
  Query: {
    accounts: async (root, args, context, info) => {
      const mongooseSelection = await getMongooseSelection(info);
      const accounts = await Account.find({}).select(mongooseSelection).lean();
      console.log(accounts);
      console.log(ffff);
      return accounts;
    },
    status: async (root, args, context, info) => {
      const statuss = await Status.find();
      return statuss;
    },
    posts: async (root, args, context, info) => {
      const posts = await Post.find();
      return posts;
    },

  },
  Post: {
    hostId: async root => {
      const account = await Account.findById(root.hostId);
      return account;
    },
    postTypeId: async root => {
      const posttype = await PostType.findById(root.postTypeId);
      return posttype;
    },
    statusId: async root => {
      // const rs = await Status.find({ _id: sssss.statusId });
      const rs = await Status.findById(root.statusId);
      return rs;
    },
  },

  Mutation: {
    createAccount: async (root, args) => {
      console.log(args);

      const newAccount = await new Account(args);
      console.log(newAccount);
      const rs = await newAccount.save();
      return rs;
    },
    updateAccount: async (root, args) => {
      const result = await Account.findOneAndUpdate({ username: args.username }, { ...args }, { new: true });
      return result;
    },
    deleteAccount: async (root, args) => {
      console.log(args);
      const result = await Account.deleteOne({ username: args.username });
      if (result.deletedCount) {
        return true;
      }
      return false;
    },
  },

};

// export default resolvers;
module.exports = resolvers;
