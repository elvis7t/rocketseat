export abstract class HashComparer {   
    abstract compare(plain: String, hash: String): Promise<boolean>
}