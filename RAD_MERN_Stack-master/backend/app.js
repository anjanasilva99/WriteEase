import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

//connect mongodb cluster and listening port 8080
mongoose
  .connect(
    "mongodb+srv://admin:LR8TPEwfi0P8p3ps@cluster0.ogj6ni2.mongodb.net/BlogApplication?retryWrites=true&w=majority"
  )
  .then(() => app.listen(8080))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 8080")
  )
  .catch((err) => console.log(err));
