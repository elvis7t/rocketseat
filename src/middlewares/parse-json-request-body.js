export async function parseJsonRequestBody(request, response) {
    const buffers = [];
    for await (const chunk of request) {
        buffers.push(chunk);
    }
    
    try {
        request.body = JSON.parse(Buffer.concat(buffers).toString());
        console.log(request.body);
        
    } catch (error) {
        request.body = null;
    }
}