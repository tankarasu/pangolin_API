/* eslint-disable new-cap */

// Externals Requirements
// TODO view Router from express
import express from "express";

// Constant
export const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  console.log("request params", req.params);
  res.send({ message: "Hello World" });
});

router.get("/:arg", (req: express.Request, res: express.Response) => {
  res.json(req.params.arg);
});

router.post("/", (res: express.Response) => {
  res.json("POST");
});

router.put("/:arg", (req: express.Request, res: express.Response) => {
  res.json(req.params.arg);
});

router.delete("/:arg", (req: express.Request, res: express.Response) => {
  res.json(req.params.arg);
});
