import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./Routes/auth.route.js";
import messageRoutes from "./Routes/message.route.js";
import { connectDB } from "./Libraries/db.js";
import { app, server } from "./Libraries/socket.js";
import path from "path";

dotenv.config();

// const app = express();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production ") {
  app.use(express.static(path.join(__dirname, "../FrontEnd/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../FrontEnd/dist/index.html"));
  });
}
server.listen(PORT, () => {
  console.log(`server is running in port : ${PORT}`);
  connectDB();
});
