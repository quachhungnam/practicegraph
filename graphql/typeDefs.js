const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type PostType{
        _id:ID!
        name:String
        description:String
    }
    type Province{
        _id:ID!
        name:String
        description:String
    }
    type Status{
        _id:ID!
        code:Int
        description:String
    }
    type Account{
        _id:ID
        username:String
        password:String
        status:Boolean
        name:String
        email:String
        mobile:String
        address:String
    }
    type Post{
        _id:ID!
        title:String
        hostId:Account
        postTypeId:PostType
        province:Province
        statusId:Status
    }

    type Query {
        accounts:[Account]
        posts:[Post]
        status:[Status]
    }
    type Mutation{
        createAccount(username:String,password:String,status:Int, name: String, email:String,mobile:String, address:String):Account
        updateAccount(username:String,password:String):Account
        deleteAccount(username:String):Boolean
        
    }
`;

module.exports = typeDefs;
