import { os } from "@orpc/server";
import { z } from "zod";

export const findUser = os   
  .input(z.object({
    id: z.string(), 
  })) 
  .handler(({input}) => {
    console.log("Fetching user with ID:", input.id); 
    return {
      id: input.id,
      name: "Vicente Fernandez",
      email: "vicente.fernandez@gmail.com",
      profileImage: "https://example.com/vicente-fernandez.jpg",
    };
  });
 
