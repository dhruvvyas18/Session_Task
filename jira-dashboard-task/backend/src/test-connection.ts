import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { Task } from "./models/task";

dotenv.config();

const testConnection = async () => {
    try {
        console.log("🔄 Testing MongoDB Atlas connection...");
        await connectDB();
        
        // Test creating a sample task
        const sampleTask = await Task.create({
            title: "Test Task",
            description: "This is a test task to verify MongoDB connection",
            assignee: "Test User",
            status: "pending"
        });
        
        console.log("✅ Sample task created:", sampleTask);
        
        // Test finding tasks
        const tasks = await Task.find();
        console.log(`✅ Found ${tasks.length} tasks in database`);
        
        // Clean up test task
        await Task.findByIdAndDelete(sampleTask._id);
        console.log("✅ Test task cleaned up");
        
        console.log("🎉 MongoDB Atlas connection test successful!");
        process.exit(0);
    } catch (error) {
        console.error("❌ MongoDB connection test failed:", error);
        process.exit(1);
    }
};

testConnection();