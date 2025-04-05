import "dotenv/config";
import { z } from "zod";
import { injectable } from "tsyringe";

@injectable()
export class EnvConfig {
  public readonly NODE_ENV: string;
  public readonly API_PORT: number;
  public readonly CORS_ORIGIN: string;  
  public readonly DATABASE_CLIENT: string;
  public readonly DATABASE_URL: string;

  constructor() {
    const configSchema = z.object({
      NODE_ENV: z
        .enum(["development", "test", "production"])
        .default("development"),
      API_PORT: z.string().default("3000"),
      CORS_ORIGIN: z.string().default("*"),     
      DATABASE_CLIENT: z.string().default("sqlite3"),
      DATABASE_URL: z.string().default("./db/app.db"),
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
    this.DATABASE_URL = envVars.data.DATABASE_URL;
    this.DATABASE_CLIENT = envVars.data.DATABASE_CLIENT;
  }
}
