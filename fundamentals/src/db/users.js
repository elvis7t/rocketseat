import { randomUUID } from 'node:crypto';

const users = [
    {
        id: randomUUID(),
        name: 'John Doe',
        email: 'elvis@gmail.com'
    },
    {
        id: randomUUID(),
        name: 'Jane Doe',
        email: 'jhon@gmail.com'
    }
];


export default users;