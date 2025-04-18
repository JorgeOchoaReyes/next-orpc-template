import { findUser, createUser, listUsers } from "./routes/user";

export const router = {
  user: {
    get: findUser,
    create: createUser,
    list: listUsers
  }
};

export type RouterType = typeof router; 