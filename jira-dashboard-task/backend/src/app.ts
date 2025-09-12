import express from "express";
import taskRouter from "./routes/Task";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(taskRouter);
app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});
