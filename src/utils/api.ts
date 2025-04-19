import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { RouterClient } from "@orpc/server";
import { createORPCReactQueryUtils } from "@orpc/react-query";
import type { router } from "../server/root";  

const link = new RPCLink({ 
  url: new URL("/api/rpc", typeof window !== "undefined" ? window.location.href : "http://localhost:3000"),
  headers: () => ({
    authorization: "Bearer token",  
    "Content-Type": "application/json",
  }), 
});
 
const client: RouterClient<typeof router> = createORPCClient(link); 

export const api = createORPCReactQueryUtils(client);