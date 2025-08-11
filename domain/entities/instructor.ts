import { randomUUID } from 'node:crypto';

export class Instructor {
    static readonly className = 'Instructor';
    public name: string;
    public email: string;
    public id: string;

    constructor(name: string, email: string, id?: string) {
        this.name = name;
        this.email = email;
        this.id = id ?? randomUUID();
    }
}