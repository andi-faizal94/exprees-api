import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/user.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("helo world");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port : http://localhost:${PORT}`);
});
