import { findUser } from "./routes/user";

export const router = {
  user: {
    get: findUser, 
  }
};

export type RouterType = typeof router; 