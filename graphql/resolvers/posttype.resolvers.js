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

};
