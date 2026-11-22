
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const emptyForm = {
  title: "",
  description: "",
  status: "todo",
  priority: "medium",
  dueDate: ""
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function apiRequest(path, options = {}) {
    const response = await fetch(path, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      }
    });

    const data = await response.json();

    if (response.status === 401) {
      navigate("/login", { replace: true });
      throw new Error("Session expired. Please login again.");
    }

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  }

  async function loadTasks() {
    try {
      setError("");
      const data = await apiRequest("/api/tasks");
      setTasks(data.tasks || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      const payload = {
        ...form,
        dueDate: form.dueDate || null
      };

      await apiRequest(
        editingId ? `/api/tasks/${editingId}` : "/api/tasks",
        {
          method: editingId ? "PUT" : "POST",
          body: JSON.stringify(payload)
        }
      );

      setForm(emptyForm);
      setEditingId(null);
      await loadTasks();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  function editTask(task) {
    setEditingId(task._id);
    setForm({
      title: task.title,
      description: task.description || "",
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate ? task.dueDate.slice(0, 10) : ""
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function deleteTask(id) {
    if (!window.confirm("Delete this task?")) return;

    try {
      await apiRequest(`/api/tasks/${id}`, { method: "DELETE" });
      await loadTasks();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>TaskFlow</h1>
        <button
          type="button"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </header>

      <section className="dashboard-content">
        <h2>My Tasks</h2>
        <p>Organize and track your daily work.</p>

        {error && <p className="error" role="alert">{error}</p>}

        <form className="task-form" onSubmit={handleSubmit}>
          <h3>{editingId ? "Edit Task" : "Create Task"}</h3>

          <label htmlFor="title">Task Title</label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            minLength={3}
            maxLength={150}
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            maxLength={2000}
          />

          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="todo">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={form.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label htmlFor="dueDate">Due Date</label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={form.dueDate}
            onChange={handleChange}
          />

          <button type="submit" disabled={saving}>
            {saving ? "Saving..." : editingId ? "Update Task" : "Add Task"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm(emptyForm);
              }}
            >
              Cancel
            </button>
          )}
        </form>

        <section className="task-list">
          <h3>Task List</h3>

          {loading ? (
            <p>Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p>No tasks found. Create your first task.</p>
          ) : (
            tasks.map((task) => (
              <article className="task-card" key={task._id}>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <p>Status: {task.status.replace("_", " ")}</p>
                <p>Priority: {task.priority}</p>
                <p>
                  Due: {task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString()
                    : "Not set"}
                </p>
                <button type="button" onClick={() => editTask(task)}>
                  Edit
                </button>
                <button type="button" onClick={() => deleteTask(task._id)}>
                  Delete
                </button>
              </article>
            ))
          )}
        </section>
      </section>
    </main>
  );
}
