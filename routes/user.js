import express, { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  //   {
  //     firstName: "andi",
  //     lastName: "faizal",
  //     age: 25,
  //   },
  //   {
  //     firstName: "zain",
  //     lastName: "malik",
  //     age: 12,
  //   },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  //   const id = uuidv4();

  res.send("hallo");
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4 });
  res.send(`User with name  `);
});

export default router;
