const graphqlFields = require('graphql-fields');
const Account = require('../../models/Account');
const Post = require('../../models/Post');
const PostType = require('../../models/PostType');
const Status = require('../../models/Status');

const getMongooseSelection = (info, fieldPath = null) => {
  const selections = graphqlFields(info);
  const mgs = Object.keys(fieldPath ? selections[fieldPath] : selections).reduce((a, b) => ({ ...a, [b]: 1 }), {});
  return mgs;
};

module.exports = {
  Query: {
    accounts: async (root, args, context, info) => {
      const mongooseSelection = await getMongooseSelection(info);
      const accounts = await Account.find({}).select(mongooseSelection).lean();
      return accounts;
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
