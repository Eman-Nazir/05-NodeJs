# 🟢 Node.js Core Concepts

A hands-on, topic-by-topic exploration of Node.js fundamentals — built while training as a **MERN Stack Developer Trainee** at **ZACoders**, under the mentorship of **Muhammad Raheel**.

This repo is where the "why" behind Node.js clicks: how the runtime works under the hood, how it talks to the operating system and file system, how custom modules are structured, and how a raw HTTP server comes together — before frameworks like Express hide the details.

---

## 📁 Project Structure

| Folder | What's Inside |
|---|---|
| `1_console` | Exploring the `console` object beyond `console.log()` — timing, tables, grouping, and formatting output for real debugging. |
| `2_os_module` | Working with the built-in `os` module — reading system info like CPU architecture, memory, uptime, and platform details. |
| `3_fs_module` | File system operations with the `fs` module — reading, writing, appending, and managing files both synchronously and asynchronously. |
| `4_custom_modules` | Building and exporting custom modules — understanding `module.exports`, `require()`, and how Node's module system actually works. |
| `5_http_server` | Creating a raw HTTP server using Node's native `http` module — no Express, just core Node handling requests and responses. |
| `log.txt` | Sample output/logs generated while testing the modules above. |
| `package.json` | Project metadata and dependencies. |

---

## 🎯 Why This Repo Exists

Before jumping into Express, MongoDB, and full-stack builds, it's worth understanding what Node.js is actually doing:

- How the **event-driven, non-blocking I/O model** works in practice
- How Node interacts with the **operating system** and **file system** directly
- How **modules** are structured and shared across a project
- How an **HTTP server** works at its most basic level — before any framework abstracts it away

Every concept here becomes the foundation for the backend work that follows (REST APIs, MVC architecture, and eventually production-level projects).

---

## 🛠️ Tech

- **Runtime:** Node.js
- **Core Modules Used:** `console`, `os`, `fs`, `http`
- **Concepts Covered:** Modules & exports, synchronous vs asynchronous operations, file I/O, system info, raw server creation

---

## ▶️ Getting Started

```bash
git clone https://github.com/Eman-Nazir/<repo-name>.git
cd <repo-name>
node <folder-name>/<file-name>.js
```

Each folder is self-contained — navigate in and run the relevant `.js` file to see that concept in action.

---

## 🙋‍♀️ About

Built by **Eman Nazir** — BS Computer Science student, MERN Stack Developer Trainee at **ZACoders**, and creator of the **#100DaysOfWebDevelopment** learning series on LinkedIn.

📌 Follow the journey: `#100DaysOfWebDevelopment` `#MERNStack` `#NodeJS` `#ZACoders`
