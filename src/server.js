import http from 'node:http';
import { config } from 'dotenv';
import { parseJsonRequestBody } from './middlewares/parseJsonRequestBody.js';
import { routes } from './routes/main.js';
import { extractQueryParams } from './utils/extract-query-params.js';
config();

const server = http.createServer(async (request, response) => {
    const { method, url } = request    
    await parseJsonRequestBody(request, response);

    const route = routes.find(route => (
        route.method === method && route.path.test(url)
    ));

    if (route) {
        const routeParams = request.url.match(route.path);
        const { query, ...params } = routeParams.groups;
        request.params = params;
        request.query = query ? extractQueryParams(query): {};
        return route.handler(request, response);
    }   

    return response.writeHead(404).end();
});

const PORT = process.env.PORT || 2222;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});