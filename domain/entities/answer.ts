import { randomUUID } from 'crypto';

export class Answer {
    public content: string;
    public id: string;

    constructor(content: string, id?: string) {
        this.content = content;
        this.id = id ?? randomUUID();
    }
}