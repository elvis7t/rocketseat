import { buildRoutePath } from './utils/build-route-path.js';
import { randomUUID } from 'node:crypto';
import users from './db/users.js';
const userList = users;
export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/users'),
        handler: (request, response) => {
            return response
                .end(JSON.stringify(userList));
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/users'),
        handler: (request, response) => {           
            const { name, email } = request.body;
            
            userList.push({
                id: randomUUID(),
                name,
                email
            });
            return response.writeHead(201).end(JSON.stringify(request.body));
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'),
        handler: (request, response) => {
            const { id } = request.params;
            const userIndex = userList.findIndex(user => user.id === id);
            if (userIndex > -1) {
                const user = userList[userIndex];
                const userName = user ? user.name : null;
                userList.splice(userIndex, 1);
                console.log(userName);                           
            }
            return response.writeHead(204).end();
        }
    }
]