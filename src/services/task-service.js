import TaskModel from '../models/task.js';

export default class TaskService {
  constructor() {
    this.taskModel = new TaskModel();
  }

  async getAllTasks(search) {
    return this.taskModel.getAllTasks(search);
  }

  async createTask(taskData) {
    return this.taskModel.addTask(taskData);
  }

  async deleteTask(id) {
    return this.taskModel.deleteTask(id);
  }

  async updateTask(task) {
    return this.taskModel.updateTask(task);
  }
}