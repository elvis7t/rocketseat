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

    async getAllTasks() {
        await this.#initialize();
        return this.#tasks;
    }

    async addTask(task) {
        const newTask = {
            id: randomUUID(),
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
        const taskIndex = this.#tasks.findIndex(task => task.id === id);

        if (taskIndex > -1) {
            this.#tasks.splice(taskIndex, 1);
        }
    }
}

export default TaskModel;