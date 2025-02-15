export default class TaskController {
    async getAllTasks(request, response) {
      try {
        const search = request.query;
        const tasks = await taskService.getAllTasks(search);
        return response.end(JSON.stringify(tasks));
      } catch (error) {
        console.error('Error fetching tasks:', error);
        return response.writeHead(500).end(JSON.stringify({ error: 'Failed to fetch tasks' }));
      }
    }
  
    async createTask(request, response) {
      try {
        const { title, description } = request.body;
        if (!description || !title) {
          return response.writeHead(400).end(JSON.stringify({
            error: 'Task title and description are required'
          }));
        }
        const newTask = await taskService.createTask({ title, description });
        return response.writeHead(201).end(JSON.stringify(newTask));
      } catch (error) {
        console.error('Error creating task:', error);
        return response.writeHead(500).end(JSON.stringify({ error: 'Failed to create task' }));
      }
    }
  
    async deleteTask(request, response) {
      try {
        const { id } = request.params;
        await taskService.deleteTask(id);
        return response.writeHead(204).end();
      } catch (error) {
        console.error('Error deleting task:', error);
        return response.writeHead(500).end(JSON.stringify({
          error: "Failed to delete task",
          message: error instanceof Error ? error.message : String(error)
        }));
      }
    }
  
    async updateTask(request, response) {
      try {
        const { id } = request.params;
        const { title, description, completedAt } = request.body;
        const task = { id, title, description, completedAt };
        await taskService.updateTask(task);
        return response.writeHead(200).end(JSON.stringify({
          success: true,
          message: "Task updated successfully"
        }));
      } catch (error) {
        console.error('Error updating task:', error);
        return response.writeHead(500).end(JSON.stringify({
          error: "Failed to update task",
          message: error instanceof Error ? error.message : String(error)
        }));
      }
    }
  }