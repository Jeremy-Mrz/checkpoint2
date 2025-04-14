import { buildSchema } from "type-graphql";
import { datasource } from "./datasource";
import { startStandaloneServer } from "@apollo/server/standalone";
import { CountryResolver } from "./resolvers/countryResolver";
import { ApolloServer } from "@apollo/server";

async function initialize() {
  await datasource.initialize().then(() => console.log('Data source initialized'));
  const schema = await buildSchema({
    resolvers: [CountryResolver]
  });
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, { listen: { port: 5000 } });
  console.log(`Server up and running at ${url}`);
}

initialize();