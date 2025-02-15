import { randomUUID } from 'node:crypto';
import { Database } from '../db/database.js';
const db = new Database();

export class TaskModel {
    #tasks;

    constructor() {
        this.#initialize();
    }

    async #initialize() {
        this.#tasks = await db.select('tasks');
    }

    async getAllTasks(search) {
        await this.#initialize();

        let data = this.#tasks;

        if (search && Object.keys(search).length > 0) {
            data = data.filter(task => {
                return Object.entries(search).some(([key, value]) => {
                    return task[key].toLowerCase().includes(value.toLowerCase())
                })
            });
        }

        return data;

    }

    async addTask(task) {

        if (!task.description) {
            throw new Error('Task description is required');
        }
        if (!task.title) {
            throw new Error('Task title is required');
        }
        const newTask = {
            id: randomUUID(),
            title: task.title,
            description: task.description,
            createdAt: new Date(),
            completedAt: null,
            updatedAt: new Date(),
        };
        await db.insert('tasks', newTask);
        await this.#initialize();
        return newTask;
    }

    async deleteTask(id) {
        if (!id) {
            throw new Error('Task ID is required');
        }
        const tasks = await this.getAllTasks();
        const taskExists = tasks.some(task => task.id === id);

        if (!taskExists) {
            throw new Error('Task not found');
        }

        await db.delete('tasks', { id });
        await this.#initialize();
    }

    async updateByIdTask(task) {
        if (!task.id) {
            throw new Error('Task ID is required');
        }

        const tasks = await this.getAllTasks();
        const taskExists = tasks.some(item => item.id === task.id);

        if (!taskExists) {
            throw new Error('Task not found');
        }

        await db.update('tasks', task);
        await this.#initialize();
    }
}

export default TaskModel;