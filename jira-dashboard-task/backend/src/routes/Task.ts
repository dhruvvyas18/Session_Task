import express, { Request, Response } from "express";
import { readFile, readFileSync, writeFileSync } from "fs";
import path from "path";
import { Tasks } from "../common/commonInterface";
import { log } from "console";

const router = express.Router();
const filepath = path.join(__dirname, "../..", "src", "data", "response.json");
router.get("/", async (req, res) => {
  try {
    const fileContent = await readFileSync(filepath, "utf-8");
    res.json(JSON.parse(fileContent));
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
});

router.get("/search/user", async (req, res) => {
  const { user, status } = req.query;

  let data: Tasks[];
  try {
    const fileContent = await readFileSync(filepath, "utf-8");

    const tasks: Tasks[] = JSON.parse(fileContent);

    if (!status && !user) {
      data = tasks;
    } else if (status && user) {
      data = tasks.filter(
        (task) => task.status === status && task.assignee === user
      );
    } else if (status) {
      data = tasks.filter((task) => task.status === status);
    } else {
      data = tasks.filter((task) => task.assignee === user);
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
});

router.get("/search/:content", async (req, res) => {
  const { content } = req.params;
  try {
    const fileContent = await readFileSync(filepath, "utf-8");

    const tasks: Tasks[] = JSON.parse(fileContent);
    const data: Tasks[] = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(content.toLowerCase()) ||
        task.description.toLowerCase().includes(content.toLowerCase())
    );

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
});

router.put("/update/:id", async (req, res) => {
  const { status } = req.body;
  console.log(req.body);

  const { id } = req.params;
  const fileContent = await readFileSync(filepath, "utf-8");
  if (!status) res.json({ message: "Some thing Went Wrong" });
  let tasks: Tasks[] = JSON.parse(fileContent);
  let findedTask = tasks.find((task) => task.id === id);
  if (!findedTask) res.json({ message: "Data not found" });
  findedTask!.status = status;
  console.log(findedTask);

  writeFileSync(filepath, JSON.stringify(tasks));
  res.json({ message: "SuccessFull Updated" });
});

router.post("/addTask", async (req, res) => {
  const { task } = req.body;
  console.log(task);

  const fileContent = await readFileSync(filepath, "utf-8");
  if (!task) res.json({ message: "Some thing Went Wrong" });
  let tasks: Tasks[] = JSON.parse(fileContent);
  tasks.push(task);
  writeFileSync(filepath, JSON.stringify(tasks));
  res.json({ message: "Data Added SuccessFully" });
});

export default router;
