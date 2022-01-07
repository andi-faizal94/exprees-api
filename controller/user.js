import { v4 as uuidv4 } from "uuid";

export const getUser = (req, res) => {
  res.send(users);
};
export const getUserById = (req, res) => {
  const { id } = req.params;
  const findUser = users.find((user) => user.id === id);
  res.send(findUser);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with name ${users} `);
};

export const updateUser = (req, res) => {
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
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users.filter((user) => user.id !== id);
  res.send(`user deleted`);
};
