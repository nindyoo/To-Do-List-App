// ===== STATE =====
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// ===== ROOT =====
const app = document.getElementById("app");

// ===== CREATE UI =====
const title = createElement("h1", {}, "Todo List");

const form = createElement("form");
const input = createElement("input", {
  type: "text",
  placeholder: "Add new todo...",
});
const addBtn = createElement("button", { type: "submit" }, "Add");

const list = createElement("ul");

form.append(input, addBtn);
app.append(title, form, list);

// ===== EVENTS =====
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();

  if (!value) return;

  addTodo(value);
  input.value = "";
});

list.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (e.target.matches(".delete")) {
    deleteTodo(id);
  }

  if (e.target.matches(".toggle")) {
    toggleTodo(id);
  }
});

// ===== FUNCTIONS =====
function createElement(tag, attrs = {}, text = "") {
  const el = document.createElement(tag);

  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }

  if (text) el.textContent = text;

  return el;
}

function addTodo(text) {
  const newTodo = {
    id: Date.now().toString(),
    text,
    completed: false,
  };

  todos.push(newTodo);
  save();
  render();
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  save();
  render();
}

function toggleTodo(id) {
  todos = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  save();
  render();
}

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = createElement("li");

    const text = createElement(
      "span",
      {
        style: `text-decoration: ${todo.completed ? "line-through" : "none"}`,
      },
      todo.text
    );

    const toggleBtn = createElement(
      "button",
      { "data-id": todo.id, class: "toggle" },
      "✔"
    );

    const deleteBtn = createElement(
      "button",
      { "data-id": todo.id, class: "delete" },
      "🗑"
    );

    li.append(text, toggleBtn, deleteBtn);
    list.appendChild(li);
  });
}

// ===== INIT =====
render();