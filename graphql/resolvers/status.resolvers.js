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
    status: async (root, args, context, info) => {
      const statuss = await Status.find();
      return statuss;
    },

  },

};
