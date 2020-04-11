import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } from "graphql";

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

// Mock data
const customers = [
  {
    id: "1",
    name: "John Doe",
    email: `jdoe@gmail.com,`,
    age: 35
  }
  {
    id: "2",
    name: "Steve Smith",
    email: `steve.com,`,
    age: 25
  },
  {
    id: "3",
    name: "Sarah Williams",
    email: `sarah@gmail.com,`,
    age: 32
  }
];

// Root query
const RootQuery = new GraphQLObjectType({
    name: "Root Query Type",
    fields: () => ({
        customer: {
            type: CustomerType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                for (let i = 0; i < customers.length; i += 1) {
                    if (customers[i].id == args.id) return customers[i]
                    else continue;
                }
            }
        }
    })
});

const schema: GraphQLSchema = new GraphQLSchema({});

export default schema;
