// Importações necessárias
import fs from 'fs';
import { parse } from 'csv-parse';
import TaskService from './task-service.js';

export default class ImportCsvTasksService {
  constructor() {
    this.taskService = new TaskService();
  }

  async importTasks(filePath) {
    const parser = fs.createReadStream(filePath).pipe(parse({ columns: true }));
    const errors = [];
    const tasks = [];

    for await (const record of parser) {
      const { title, description } = record;

      try {
        const newTask = await this.taskService.createTask({ title, description });
        tasks.push(newTask);
        
        console.log(`Task created: ${newTask.id}`);
      } catch (error) {
        errors.push({ error: `Failed to create task:`, details: error.message });
      }
    }

    if (errors.length > 0) {
      return JSON.stringify({ errors });
    } else {
      return JSON.stringify({ message: 'All tasks created successfully', tasks });
    }
  }
}