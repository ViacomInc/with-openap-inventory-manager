import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { GRAPHQL_API_URL } from "../../constants";

import {
  schema,
  createResolvers,
  withAuth,
  WithAuth,
  Handler,
} from "@viacomcbs/openap-inventory-manager-server";

import { getAppRuntimeConfig } from "../../config";

function authenticated(handler: Handler): Handler {
  const config = getAppRuntimeConfig();
  const noAuth = config.noAuth;

  return async (
    req: NextApiRequest & WithAuth,
    res: NextApiResponse
  ): Promise<false | undefined> => {
    if (noAuth) {
      req.auth = {
        id: "NO AUTH",
      };
      return handler(req, res);
    }

    console.error("Authentication Not Implemented");
    res.status(403).end();
    return false;
  };
}

const playgroundPlugin = ApolloServerPluginLandingPageGraphQLPlayground({
  settings: {
    "schema.polling.enable": false,
    "schema.polling.interval": 60 * 1000,
    "request.credentials": "include",
  },
});

const apolloServer = new ApolloServer({
  typeDefs: [schema],
  resolvers: createResolvers(),
  context: withAuth,
  introspection: true, // to allow playground in production
  plugins: [playgroundPlugin],
});

const startServer = apolloServer.start();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: GRAPHQL_API_URL,
  })(req, res);
  return undefined;
}

export default authenticated(handler);
export const config = { api: { bodyParser: false } };
