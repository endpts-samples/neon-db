import * as usersDb from "../../lib/users.js";
import type { Route } from "@endpts/types";

export default {
  method: "GET",
  path: "/users/:id",
  async handler(req) {
    // look-up the user ID provided in the path parameter
    const user = await usersDb.getById(req.params.id);

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    return Response.json(user);
  },
} satisfies Route;
