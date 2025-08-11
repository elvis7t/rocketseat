import { randomUUID } from 'crypto';

export class Student {

    public name: string;
    public email: string;
    public id: string;

    constructor(name: string, email: string, id?: string) {
        this.name = name;
        this.email = email;
        this.id = id ?? randomUUID();
    }
}