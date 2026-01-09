import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    assignee: string;
    status: string;
    category?: string;
    createdAt?: string;
    updatedAt?: string;
}

const taskSchema = new Schema<ITask>(
    {
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true },
        assignee: { type: String, required: true },
        status: {
            type: String,
            default: "pending",
        },
        category: { type: String, default: "Backend" },
    },
    { timestamps: true }
);

export const Task = mongoose.model<ITask>("Task", taskSchema);
