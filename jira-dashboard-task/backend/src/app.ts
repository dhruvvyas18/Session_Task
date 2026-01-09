import express from "express";
import cors from "cors";
import taskRoutes from "./routes/Task";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", taskRoutes);

// Global error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
