# To-Do List App

A simple To-Do List application built with **Vanilla JavaScript**, focusing on **logic and DOM manipulation** rather than heavy HTML.

This project is designed to strengthen frontend fundamentals such as state management, event handling, and localStorage usage without relying on frameworks.

---

## Features

* Add new todos
* Mark todos as completed
* Delete todos
* Persist data using localStorage
* Fully dynamic UI (generated via JavaScript)
* Event delegation for efficient DOM handling

---

## Tech Stack

* HTML5 (minimal)
* CSS3 (optional)
* JavaScript (Vanilla)

---

## Project Structure

```plaintext
todo-app/
├── index.html
├── app.js
└── style.css (optional)
```

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/nindyoo/todo-app.git
```

2. Navigate into the project:

```bash
cd todo-app
```

3. Open `index.html` in your browser

---

## Learning Focus

This project emphasizes:

* DOM manipulation without libraries
* Event delegation (single listener pattern)
* Simple state management (array of objects)
* Data persistence with localStorage
* Separation of concerns (UI vs logic)

---

## How It Works

* All UI elements are created dynamically using JavaScript (`createElement`)
* State is stored in a `todos` array
* On every update:

  1. Update state
  2. Save to localStorage
  3. Re-render UI

---

## Notes

* No frameworks used (React, Vue, etc.)
* No backend (pure frontend application)
* Focus is on logic rather than styling

---

## Future Improvements

* Edit todo
* Filter (All / Completed / Active)
* Keyboard shortcuts
* Modular architecture (separate files / MVC)
* Improved UI/UX

---

## Live Demo

https://to-do-list-app-iota-topaz.vercel.app/

---

## 📄 License

Free to use for learning purposes

