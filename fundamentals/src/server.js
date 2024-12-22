import http from 'node:http'

const server = http.createServer((request, response)=> {
    const {method, url} = request
    console.log(method, url);
    return response.end("hello world")
});

server.listen(3333);