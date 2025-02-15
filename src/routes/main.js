import { buildRoutePath } from '../utils/build-route-path.js';
import TaskController from '../controllers/task-controller.js';

const taskController = new TaskController();

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => taskController.getAllTasks(req, res)
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => taskController.createTask(req, res)
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => taskController.deleteTask(req, res)
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => taskController.updateTask(req, res)
  }
];