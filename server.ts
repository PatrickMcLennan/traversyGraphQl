import express from "express";
import expressGraphQl from "express-graphql";
import schema from "./schema";

const app: express.Application = express();
const PORT: Number = Number(process.env.PORT) || 4000;

app.use(
  "/graphql",
  expressGraphQl({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on Port 4000`);
  return "hello";
});
