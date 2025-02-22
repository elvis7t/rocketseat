import { Task } from '../models/task.js';
const taskManager = new Task();
const newTask = await taskManager.addTask({
    title: 'Task to delete existing',
    description: 'This task will be deleted'
});
describe('Task Model', () => {
    test('should get all tasks', async () => {
        const taskManager = new Task();
        const tasks = await taskManager.getAllTasks();

        expect(tasks.length).toBeGreaterThan(0);
    });
    test('should throw error when search returns no results', async () => {
        const taskManager = new Task();

        await taskManager.addTask({
            title: 'Test task',
            description: 'Test description'
        });

        const searchParams = {
            title: 'NonexistentTask12345'
        };

        await expect(async () => {
            await taskManager.getAllTasks(searchParams);
        }).rejects.toThrow('Task not found');
    });
    test('should create a new task', async () => {
        const taskManager = new Task();
        const newTask = await taskManager.addTask({
            title: 'Test task',
            description: 'Test description'
        });

        expect(newTask.title).toBe('Test task');
        expect(newTask.description).toBe('Test description');
        expect(newTask.completedAt).toBe(null);
    });
    test('should throw error when title is missing', async () => {
        const taskManager = new Task();

        await expect(async () => {
            await taskManager.addTask({
                description: 'Test description'
            });
        }).rejects.toThrow('Task title is required');
    });
    test('should throw error when description is missing', async () => {
        const taskManager = new Task();

        await expect(async () => {
            await taskManager.addTask({
                title: 'Test title'
            });
        }).rejects.toThrow('Task description is required');
    });    
    test('should throw error when task ID is not found', async () => {
        const taskManager = new Task();
        const nonexistentId = '12345-nonexistent-id';

        await expect(async () => {
            await taskManager.deleteTask(nonexistentId);
        }).rejects.toThrow('Task not found');
    });
    test('should throw error when task ID is missing', async () => {
        const taskManager = new Task();

        await expect(async () => {
            await taskManager.deleteTask();
        }).rejects.toThrow('Task ID is required');
    });    
    test('should successfully delete an existing task', async () => {
        const taskManager = new Task();        

        const id = newTask.id;
        await taskManager.deleteTask(id);
        const tasks = await taskManager.getAllTasks();

        const taskExists = tasks.some(task => task.id === id);
        expect(taskExists).toBe(false);
    });
});

