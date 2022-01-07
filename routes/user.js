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
  const findUser = users.find((user) => user.id === id);
  res.send(findUser);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with name ${users} `);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(`user updated `);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users.filter((user) => user.id !== id);
  res.send(`user deleted`);
});
export default router;
