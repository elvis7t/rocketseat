import http from 'node:http'

const server = http.createServer(async (request, response)=> {
    const {method, url} = request
    await json(request, response);
    console.log(method, url);
    return response.end("hello world")
});

server.listen(3333);