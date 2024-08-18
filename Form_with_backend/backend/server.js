import express from "express";
import connectDB from "./config/connectDb.js";
import cors from "cors"
import router from "./route/formRoute.js";
const app = express();
// mongo connection
connectDB();
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
