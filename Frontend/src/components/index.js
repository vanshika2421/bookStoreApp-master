import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import subscription from "./route/subscription.js";

dotenv.config(); // Load environment variables

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Environment Variables
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

// MongoDB Connection
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Routes
// app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/subscription", subscription);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
