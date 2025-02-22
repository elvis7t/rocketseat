import TaskService from '../services/task-service.js';
import ApiError from '../utils/api-error.js';

const taskService = new TaskService();

export default class TaskController {
  async getAllTasks(request, response) {
    try {
      const search = request.query;

      const tasks = await taskService.getAllTasks(search);

      if (tasks.length === 0) {
        throw new Error('Tasks not found');
      }

      return this.sendSuccessResponse(response, 200, tasks);
    } catch (error) {
      return this.handleError(error, response);
    }
  }

  async createTask(request, response) {
    try {
      const { title, description } = request.body;
      if (!description || !title) {
        throw new ApiError('Task title and description are required', 400);
      }

      const newTask = await taskService.createTask({ title, description });
      return this.sendSuccessResponse(response, 201, newTask);
    } catch (error) {
      return this.handleError(error, response);
    }
  }

  async deleteTask(request, response) {
    try {
      const { id } = request.params;
      await taskService.deleteTask(id);
      return response.writeHead(204).end();
    } catch (error) {
      return this.handleError(error, response);
    }
  }

  async updateTask(request, response) {
    try {
      const { id } = request.params;
      const { title, description, completedAt } = request.body;
      const task = { id, title, description, completedAt };
      await taskService.updateTask(task);
      return this.sendSuccessResponse(response, 200, null, "Task updated successfully");
    } catch (error) {
      return this.handleError(error, response);
    }
  }

  sendSuccessResponse(response, statusCode, data = null, message = null) {
    const responseBody = {
      success: true
    };

    if (data !== null) {
      if (Array.isArray(data)) {
        responseBody.data = data;
      } else {
        responseBody.task = data;
      }
    }

    if (message !== null) {
      responseBody.message = message;
    }

    return response
      .writeHead(statusCode, { 'Content-Type': 'application/json' })
      .end(JSON.stringify(responseBody));
  }

  handleError(error, response) {
    console.error(`Error in TaskController: ${error.message}`);

    let statusCode = 500;
    if (error instanceof ApiError) {
      statusCode = error.statusCode;
    } else if (error.message.includes('not found')) {
      statusCode = 404;
    } else if (
      error.message.includes('already exists') ||
      error.message.includes('invalid') ||
      error.message.includes('required') ||
      error.message.includes('tasks not found')
    ) {
      statusCode = 400;
    }

    const errorResponse = {
      success: false,
      error: error.message
    };

    return response
      .writeHead(statusCode, { 'Content-Type': 'application/json' })
      .end(JSON.stringify(errorResponse));
  }
}