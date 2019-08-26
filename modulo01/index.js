const express = require("express");

const server = express();

server.use(express.json());

let numRequests = 0;

const projects = [];

// Middleware global
server.use((req, res, next) => {
  console.time("Request");
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  numRequests++;
  console.log(`Number of Request: ${numRequests}`);
  next();
  console.timeEnd("Request");
});

// Middleware check project
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);
  if (!project) {
    return res.status(400).json({ error: `Project with id: ${id} not found` });
  }
  return next();
}

// Rotes of application
server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const projectCheck = projects.find(p => p.id == id);
  // Prevents id duplicate
  if (projectCheck) {
    return res
      .status(400)
      .json({ error: `Project with id: ${id} already exists` });
  }
  const project = {
    id,
    title,
    tasks: []
  };
  projects.push(project);
  return res.json(project);
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(p => p.id == id);
  project.title = title;
  return res.json(project);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.findIndex(p => p.id == id);
  projects.splice(projectIndex, 1);
  return res.send();
});

server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(p => p.id == id);
  project.tasks.push(title);
  return res.json(project);
});

server.listen(3000);
