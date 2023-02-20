import * as usersDb from "../../lib/users.js";
import type { Route } from "@endpts/types";

export default {
  method: "GET",
  path: "/users",
  async handler() {
    const users = await usersDb.getAll();
    return Response.json(users);
  },
} satisfies Route;
