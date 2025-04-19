/* eslint-disable import/no-anonymous-default-export */
import { RPCHandler } from "@orpc/server/node";
import { router } from "../../../server/root";  
import { NextApiRequest, NextApiResponse } from "next";   

const handler = new RPCHandler(router);

export default async (req: NextApiRequest, res: NextApiResponse) => {  
  const result = await handler.handle(req, res, {
    prefix: "/api/rpc", 
  });
   
  if (!result.matched) { 
    return; 
  }
    
  res.statusCode = 404;
  res.end("Not found"); 
};
 