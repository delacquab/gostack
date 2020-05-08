import { Router } from "express";

import UserController from "./app/controllers/UserController";

const routes = new Router();

// routes.get("/", (req, res) => {
//   return res.json({ teste: "passou" });
// });

routes.post("/users", UserController.store);

export default routes;
