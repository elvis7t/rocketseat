export abstract class HashGenerator {
    abstract hash(plain: String): Promise<String>
}