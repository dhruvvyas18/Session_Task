import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Task } from "../models/task";

const router = express.Router();

/**
 * GET /
 */
router.get("/", async (_req: Request, res: Response) => {
  try {
    const tasks = await Task.find().lean();

    const formatted = tasks.map((t: any) => ({
      id: t._id,
      title: t.title,
      description: t.description,
      assignee: t.assignee,
      status: t.status,
      category: t.category || "Backend", // Default category if not set
      createdAt: t.createdAt || new Date().toISOString(),
    }));

    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
});

/**
 * GET /search/user
 */
router.get("/search/user", async (req: Request, res: Response) => {
  try {
    const { user, status } = req.query;

    const filter: any = {};
    if (user) filter.assignee = user;
    if (status) filter.status = status;

    const tasks = await Task.find(filter).lean();

    const formatted = tasks.map((t: any) => ({
      id: t._id,
      title: t.title,
      description: t.description,
      assignee: t.assignee,
      status: t.status,
      category: t.category || "Backend", // Default category if not set
      createdAt: t.createdAt || new Date().toISOString(),
    }));

    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
});

/**
 * GET /search/:content
 * Search by title or description using regex
 */
router.get("/search/:content", async (req: Request, res: Response) => {
  try {
    const { content } = req.params;

    if (!content) {
      return res.status(400).json({ message: "Search content is required" });
    }

    // Use regex with proper typing
    const regex = new RegExp(content, "i");
    
    const tasks = await Task.find({
      $or: [
        { title: regex },
        { description: regex },
      ],
    } as any).lean();

    const formatted = tasks.map((t: any) => ({
      id: t._id,
      title: t.title,
      description: t.description,
      assignee: t.assignee,
      status: t.status,
      category: t.category || "Backend", // Default category if not set
      createdAt: t.createdAt || new Date().toISOString(),
    }));

    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
});

/**
 * PUT /update/:id
 */
router.put("/update/:id", async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const task = await Task.findByIdAndUpdate(id, { status }, { new: true });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Successfully Updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
});

/**
 * POST /addTask
 */
router.post("/addTask", async (req: Request, res: Response) => {
  try {
    const { task } = req.body;

    if (!task || !task.title || !task.description || !task.assignee) {
      return res.status(400).json({ message: "Title, description, and assignee are required" });
    }

    await Task.create({
      title: task.title,
      description: task.description,
      assignee: task.assignee,
      status: task.status ?? "pending",
      category: task.category ?? "Backend",
    });

    res.status(201).json({ message: "Task Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
});

export default router;
