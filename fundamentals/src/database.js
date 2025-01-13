export class Database {
    database = {}

    select(table) {
        const data = this.database[table] ?? []
        return data
    }
    
    insert(table, data) {

    }
}