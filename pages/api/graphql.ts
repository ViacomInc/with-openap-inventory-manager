import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
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
  ): Promise<void> => {
    if (noAuth) {
      req.auth = {
        id: "NO AUTH",
      };
      return handler(req, res);
    }

    console.error("Authentication Not Implemented");
    return res.status(403).end();
    // add auth object to req.auth
    return handler(req, res);
  };
}

const apolloServer = new ApolloServer({
  typeDefs: [schema],
  resolvers: createResolvers(),
  tracing: process.env.NODE_ENV === "development",
  context: withAuth,
  playground: {
    settings: {
      "request.credentials": "include",
    },
  },
  introspection: true,
  uploads: false,
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });
export default authenticated(handler);
export const config = { api: { bodyParser: false } };
