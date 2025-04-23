import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingBlogId, setEditingBlogId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch blogs");
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      if (editingBlogId) {
        // Update blog
        await axios.put(`http://localhost:5000/api/blogs/${editingBlogId}`, {
          title,
          content,
          image,
        });
        setSuccess("Blog updated successfully!");
      } else {
        // Create new blog
        await axios.post("http://localhost:5000/api/blogs", {
          title,
          content,
          image,
        });
        setSuccess("Blog added successfully!");
      }

      // Reset form
      setTitle("");
      setContent("");
      setImage("");
      setEditingBlogId(null);
      fetchBlogs();
    } catch (err) {
      const message =
        err.response?.data?.error || "Failed to save blog";
      setError(message);
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setImage("");
    setEditingBlogId(null);
    setError("");
    setSuccess("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Blog</h2>

      {window.location.pathname === "/admin" && (
        <div>
          <form
            onSubmit={handleSubmit}
            className="mb-5 p-3 border rounded bg-light"
          >
            <h4>{editingBlogId ? "Edit Blog" : "Add New Blog"}</h4>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea
                className="form-control"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {editingBlogId ? "Update Blog" : "Add Blog"}
              </button>
              {editingBlogId && (
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="mt-5">
            <h4>Manage Blogs</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>{blog.title}</td>
                    <td>{blog.content.substring(0, 100)}...</td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => {
                          setTitle(blog.title);
                          setContent(blog.content);
                          setImage(blog.image || "");
                          setEditingBlogId(blog._id);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={async () => {
                          try {
                            const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
                            if (!confirmDelete) return;

                            const response = await axios.delete(
                              `http://localhost:5000/api/blogs/${blog._id}`
                            );

                            if (response.data.success) {
                              await fetchBlogs();
                              setSuccess("Blog deleted successfully!");
                            } else {
                              throw new Error("Delete operation failed");
                            }
                          } catch (err) {
                            const errorMessage =
                              err.response?.data?.error ||
                              err.message ||
                              "Failed to delete blog";
                            setError(errorMessage);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Public blog list */}
      <div className="row">
        {loading && <div>Loading...</div>}
        {!loading && blogs.length === 0 && <div>No blogs found.</div>}
        {blogs.map((blog) => (
          <div className="col-md-6 mb-4" key={blog._id}>
            <div className="card h-100">
              {blog.image && (
                <img
                  src={blog.image}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
