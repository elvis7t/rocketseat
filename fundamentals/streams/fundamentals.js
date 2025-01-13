// process.stdin
//     .pipe(process.stdout)

import { Readable, Writable, Transform, Duplex } from 'node:stream'

class OneToHundreadSream extends Readable {
    index = 1
    _read() {
        const i = this.index++
        setTimeout(() => {
            if (i > 100) {
                this.push(null)
                return
            }
            const buf = Buffer.from(String(i))
            this.push(buf)
        }, 1000)
    }
}

class MultiplayByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1
        // this.push(String(transformad))
        callback(null, Buffer.from(String(transformed)))
    }
}

new OneToHundreadSream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplayByTenStream())
