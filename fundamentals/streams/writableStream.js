import { Readable, Writable, Transform, Duplex } from 'node:stream'
import ReadableStream from './readableStream.js'
class MultiplayByTenStream extends Transform {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new ReadableStream()
    .pipe(new MultiplayByTenStream())