import fs from 'fs';
import { parse } from 'csv-parse';
import axios from 'axios';

async function importTasks(filePath) {
    const parser = fs.createReadStream(filePath).pipe(parse({ columns: true }));
    const errors = [];
    for await (const record of parser) {
        const { title, description } = record;

        try {
            const response = await axios.post('http://localhost:3333/tasks', {
                title,
                description
            });

            console.log(`Task created: ${response.data.id}`);
        } catch (error) {
            errors.push({ error: `Failed to create task:`, details: error.message });
        }
    }

    if (errors.length > 0) {
        return JSON.stringify({ errors });
    } else {
        return JSON.stringify({ message: 'All tasks created successfully' });
    }
}

importTasks('../data/csv-file.csv').then(result => {
    console.log('Result:', result);
});;
