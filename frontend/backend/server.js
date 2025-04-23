const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

// CORS middleware must be first
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB Atlas connected:", conn.connection.host);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

connectDB();

// Service schema
const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});
const Service = mongoose.model("Service", serviceSchema);

// Blog schema
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
});
const Blog = mongoose.model("Blog", blogSchema);

// Basic error handler
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: error.message || "Something went wrong" });
};

// Routes
app.get("/", (req, res) => {
  res.send("Express server is running!");
});

// Service Routes
app.get("/api/services", async (req, res) => {
  try {
    const services = await Service.find().sort({ _id: -1 });
    res.json(services);
  } catch (error) {
    handleError(res, error);
  }
});

app.post("/api/services", async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.json(service);
  } catch (error) {
    handleError(res, error);
  }
});

app.put("/api/services/:id", async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json(updated);
  } catch (error) {
    handleError(res, error);
  }
});

app.delete("/api/services/:id", async (req, res) => {
  try {
    const deleted = await Service.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json({ success: true });
  } catch (error) {
    handleError(res, error);
  }
});

// Blog Routes
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    handleError(res, error);
  }
});

app.post("/api/blogs", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.json(blog);
  } catch (error) {
    handleError(res, error);
  }
});

app.put("/api/blogs/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid blog ID" });
    }
    const updated = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(updated);
  } catch (error) {
    handleError(res, error);
  }
});

app.delete("/api/blogs/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid blog ID" });
    }
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ success: true });
  } catch (error) {
    handleError(res, error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
