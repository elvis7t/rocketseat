import fs from 'fs';
import { parse } from 'csv-parse';
import axios from 'axios';

async function importTasks(filePath) {
    const parser = fs.createReadStream(filePath).pipe(parse({ columns: true }));

    for await (const record of parser) {
        const { title, description } = record;

        try {
            const response = await axios.post('http://localhost:3333/tasks', {
                title,
                description
            });

            console.log(`Task created: ${response.data.id}`);
        } catch (error) {
            console.error(`Failed to create task: ${title}`, error);
        }
    }
}

importTasks('./csv-file.csv');
