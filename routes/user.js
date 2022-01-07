import express, { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("my name andi");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("you");
});

router.post("/", (res, req) => {
  const user = req.params;
  const id = uuidv4();
  console.log(id);
  res.send("aa");
  //   res.send(user);
});

export default router;
