import { buildRoutePath } from './utils/build-route-path.js';
import usersModel from './model/usersModel.js';
const listUsers = new usersModel();

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/users'),
        handler: (request, response) => {            
            const users = listUsers.select();
            return response
                .end(JSON.stringify(users));
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/users'),
        handler: (request, response) => {
            const { name, email } = request.body;

            listUsers.insert({
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
            listUsers.delete(id);
            return response.writeHead(204).end();
        }
    }
]