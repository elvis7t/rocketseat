import fs from 'node:fs/promises';

const databasePath = new URL('../db/db.json', import.meta.url);

export class Database {
    #database = {};
    #loadPromise;

    constructor() {
        this.#loadPromise = this.#loadDatabase();
    }

    async #loadDatabase() {
        try {
            const data = await fs.readFile(databasePath, 'utf8');
            this.#database = JSON.parse(data);
        } catch (error) {
            console.error('Erro ao carregar o banco de dados:', error);
            this.#database = { users: [] };
            await this.#persist();
        }
    }

    async #persist() {
        try {
            await fs.writeFile(databasePath, JSON.stringify(this.#database, null, 2));
        } catch (error) {
            console.error('Erro ao salvar o banco de dados:', error);
        }
    }

    async select(table) {
        await this.#loadPromise;
        const data = this.#database[table] ?? [];
        return data;
    }

    async insert(table, data) {
        await this.#loadPromise;
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data);
        } else {
            this.#database[table] = [data];
        }

        await this.#persist();
        return data;
    }

    async update(table, data) {


        await this.#loadPromise;

        const index = this.#database[table].findIndex(item => item.id === data.id);

        if (index > -1) {
            const task = this.#database[table][index];                        
            const getTask = {
                id: task.id,
                title: data.title ?? task.title,
                description: data.description ?? task.description,
                createdAt: task.createdAt,
                completedAt: Boolean(data.completedAt ?? task.completed),
                updatedAt: new Date(),
            };            
            
            this.#database[table][index] = getTask;            
            await this.#persist();
            return data;
        }

        return null;
    }

    async delete(table, id) {
        await this.#loadPromise;
        this.#database[table].splice(id, 1);
        await this.#persist();
    }
}
