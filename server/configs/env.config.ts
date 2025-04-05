import "dotenv/config";
import { z } from "zod";
import { injectable } from "tsyringe";

@injectable()
export class EnvConfig {
  public readonly NODE_ENV: string;
  public readonly API_PORT: number;
  public readonly CORS_ORIGIN: string;
  public readonly DB_HOST: string;
  public readonly DB_USER: string;
  public readonly DB_PASSWORD: string;
  public readonly DB_NAME: string;
  public readonly DB_PORT: number;
  public readonly DATABASE_CLIENT: string;

  constructor() {
    const configSchema = z.object({
      NODE_ENV: z
        .enum(["development", "test", "production"])
        .default("development"),
      API_PORT: z.string().default("3000"),
      CORS_ORIGIN: z.string().default("*"),
      DB_HOST: z.string().default("localhost"),
      DB_USER: z.string().default("root"),
      DB_PASSWORD: z.string().default("root"),
      DB_NAME: z.string().default("oimenu_beta2"),
      DATABASE_CLIENT: z.string().default("mysql"),
      DB_PORT: z
        .string()
        .transform((val) => parseInt(val, 10))
        .default("3307")
        .refine((val) => !isNaN(val), {
          message: "DB_PORT must be a number",
        }),
    });

    const envVars = configSchema.safeParse(process.env);

    if (!envVars.success) {
      console.error(
        "Erro ao validar variáveis de ambiente:",
        envVars.error.format(),
      );
      throw new Error("Falha ao carregar as variáveis de ambiente.");
    }

    this.NODE_ENV = envVars.data.NODE_ENV;
    this.API_PORT = parseInt(envVars.data.API_PORT, 10);
    this.CORS_ORIGIN = envVars.data.CORS_ORIGIN;
    this.DB_HOST = envVars.data.DB_HOST;
    this.DB_USER = envVars.data.DB_USER;
    this.DB_PASSWORD = envVars.data.DB_PASSWORD;
    this.DB_NAME = envVars.data.DB_NAME;
    this.DB_PORT = envVars.data.DB_PORT;
    this.DATABASE_CLIENT = envVars.data.DATABASE_CLIENT;
  }
}
