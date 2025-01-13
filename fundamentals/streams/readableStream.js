import { Readable } from 'node:stream'

class ReadableStream extends Readable {
    index = 1
    _read() {
        const i = this.index++
        setTimeout(() => {
            if (i > 20) {
                this.push(null)
                return
            }
            const buf = Buffer.from(String(i))
            this.push(buf)
        }, 1000)
    }
}

export default ReadableStream
new ReadableStream().pipe(process.stdout)