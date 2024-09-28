import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Same GraphQL query using fetch call
//fetch("http://localhost:4000/", {
//  "headers": {
//    "accept": "*/*",
//    "accept-language": "en-US,en;q=0.9,te;q=0.8",
//    "content-type": "application/json",
//    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
//    "sec-ch-ua-mobile": "?0",
//    "sec-ch-ua-platform": "\"Windows\"",
//    "sec-fetch-dest": "empty",
//    "sec-fetch-mode": "cors",
//    "sec-fetch-site": "same-origin"
//  },
//  "referrer": "http://localhost:4000/",
//  "referrerPolicy": "strict-origin-when-cross-origin",
//  "body": "{\"query\":\"query ExampleQuery {\\n  books {\\n    id\\n    title\\n    publishedYear\\n  }\\n}\\n\",\"variables\":{},\"operationName\":\"ExampleQuery\"}",
//  "method": "POST",
//  "mode": "cors",
//  "credentials": "omit"
//}).then(res => res.json()).then(data => console.log(data));

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port : 4000 }
});

console.log(`🚀 Server ready at ${url}`);