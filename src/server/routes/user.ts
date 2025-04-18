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

export const createUser = os
  .input(z.object({
    name: z.string(),
    email: z.string().email(),
    profileImage: z.string().url(),
  }))
  .handler(({input}) => { 
    return {
      id: "1234-5678-9101-1121",
      name: input.name,
      email: input.email,
      profileImage: input.profileImage,
    };
  }); 

export const listUsers = os
  .handler(() => { 
    return [
      {
        id: "123",
        name: "Vicente Fernandez",
        email: "vicente.fernandez@gmail.com",
        profileImage: "https://example.com/vicente-fernandez.jpg",
      },
      {
        id: "123",
        name: "Vicente Fernandez",
        email: "vicente.fernandez@gmail.com",
        profileImage: "https://example.com/vicente-fernandez.jpg",
      },
      {
        id: "123",
        name: "Vicente Fernandez",
        email: "vicente.fernandez@gmail.com",
        profileImage: "https://example.com/vicente-fernandez.jpg",
      }
    ];
  }); 