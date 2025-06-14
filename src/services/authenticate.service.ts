import { injectable, inject } from 'tsyringe'
import { UserRepository } from "@/repository";
import { compare } from "bcryptjs";

interface AuthenticateUserServiceRequest {
    email: string;
    password: string;
}

interface AuthenticateServiceResponse {
    user: UserRepository;
    token: string;
}

@injectable()
export class AuthenticateService {
    constructor(
        @inject("UserRepository")
        private userRepository: UserRepository
    ) {}

    async execute({ email, password }: AuthenticateUserServiceRequest): Promise<AuthenticateServiceResponse> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        const isValidPassword = await compare(password, user.password_hash);

        if (!isValidPassword) {
            throw new Error("Invalid password");
        }

        const token = sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        return { user: this.userRepository, token };
    }
}



// export class AuthenticateService implements AuthenticateUserService {
//     constructor(private userRepository: UserRepository) { }

//     async execute(email: string, password: string): Promise<AuthenticateServiceResponse> {
//         const user = await this.userRepository.findByEmail(email);

//         if (!user) {
//             throw new Error("User not found");
//         }

//         const isValidPassword = await compare(password, user.password);

//         if (!isValidPassword) {
//             throw new Error("Invalid password");
//         }

//         const token = sign({ id: user.id }, process.env.JWT_SECRET, {
//             expiresIn: "1d",
//         });

//         return { user, token };
//     }
// }