import { HashComparer } from "@/domain/forum/application/cryptography/hasher-comparer";
import { HashGenerator } from "@/domain/forum/application/cryptography/hasher-generator";

export class FakerHasher implements HashGenerator, HashComparer {
    async hash(plain: String): Promise<String> {
        return plain.concat('-hashed')
    }

    async compare(plain: String, hash: String): Promise<boolean> {
        return plain.concat('-hashed') === hash
    }
}