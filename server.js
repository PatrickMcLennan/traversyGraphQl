"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_graphql_1 = __importDefault(require("express-graphql"));
var schema_1 = __importDefault(require("./schema"));
var app = express_1.default();
var PORT = Number(process.env.PORT) || 4000;
app.use("/graphql", express_graphql_1.default({
    schema: schema_1.default,
    graphiql: true
}));
app.listen(PORT, function () {
    console.log("Server is running on Port 4000");
    return "hello";
});
