const path = require('path');
const { loadFilesSync } = require('graphql-tools');
// const { mergeSchemasAsync } = require('@graphql-tools/merge');
const { mergeTypeDefs } = require('graphql-tools');

// const fff = __dirname;
// const typesArray = loadFilesSync(path.join(__dirname, '/**/*.graphql'));
const loadedFiles = loadFilesSync(`${__dirname}/**/*.graphql`);
// const fff = mergeTypeDefs(typesArray);
module.exports = mergeTypeDefs(loadedFiles);

// const { loadFilesSync } = require('graphql-tools');
// const { mergeTypeDefs } = require('graphql-tools');
// const { print } = require('graphql');
// const fs = require('fs');

// const loadedFiles = loadFilesSync(`${__dirname}/**/*.graphql`);

// const typeDefs = mergeTypeDefs(loadedFiles);
// // const printedTypeDefs = print(typeDefs);
// module.exports = loadedFiles;
