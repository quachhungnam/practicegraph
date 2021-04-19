const { mergeResolvers } = require('@graphql-tools/merge');
const accountResolver = require('./account.resolvers');
const postResolver = require('./post.resolvers');
const statusResolver = require('./status.resolvers');

const resolvers = [
  accountResolver,
  postResolver,
  statusResolver,
];

module.exports = mergeResolvers(resolvers);
