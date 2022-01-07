import express, { Router } from "express";
import {
  getUser,
  updateUser,
  getUserById,
  deleteUser,
  createUser,
} from "../controller/user.js";

const router = express.Router();

let users = [];

router.get("/", getUser);

router.get("/:id", getUserById);

router.post("/", createUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
