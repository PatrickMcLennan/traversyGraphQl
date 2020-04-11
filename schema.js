"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Customer Type
var CustomerType = new graphql_1.GraphQLObjectType({
    name: "Customer",
    fields: function () { return ({
        id: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        age: { type: graphql_1.GraphQLInt }
    }); }
});
// Mock data
var customers = [
    {
        id: "1",
        name: "John Doe",
        email: "jdoe@gmail.com,",
        age: 35
    },
    {
        id: "2",
        name: "Steve Smith",
        email: "steve.com,",
        age: 25
    },
    {
        id: "3",
        name: "Sarah Williams",
        email: "sarah@gmail.com,",
        age: 32
    }
];
// Root query
var RootQuery = new graphql_1.GraphQLObjectType({
    name: "Root Query Type",
    fields: function () { return ({
        customer: {
            type: CustomerType,
            args: {
                id: { type: graphql_1.GraphQLString }
            },
            resolve: function (parentValue, args) {
                for (var i = 0; i < customers.length; i += 1) {
                    if (customers[i].id == args.id)
                        return customers[i];
                    else
                        continue;
                }
            }
        }
    }); }
});
var schema = new graphql_1.GraphQLSchema({});
exports.default = schema;
