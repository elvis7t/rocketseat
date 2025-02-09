import { buildRoutePath } from './utils/build-route-path.js';
import TaskModel from './model/taskModel.js';

const Task = new TaskModel();

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: async (request, response) => {
            const tasks = await Task.getAllTasks();
            return response.end(JSON.stringify(tasks));
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: async (request, response) => {
            const { title , description } = request.body;

            const newTask = await Task.addTask({
                title,
                description
            });

            return response.writeHead(201).end(JSON.stringify(newTask));
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: async (request, response) => {
            const { id } = request.params;
            await Task.deleteTask(id);
            return response.writeHead(204).end();
        }
    }
];