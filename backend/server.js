// server.js
import express from "express";  // ✅ keep this so express.json() works
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js"; // ✅ reuse exported app & server
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// start server after DB connection
connectToMongoDB().then(() => {
  server.listen(PORT, () => {
    console.log(`✅ Server Running on port ${PORT}`);
  });
});
