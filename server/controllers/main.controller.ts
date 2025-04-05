import { injectable, inject } from "tsyringe";
import { FastifyReply, FastifyRequest } from "fastify";
import { SqliteConfig } from "@/configs";

@injectable()
export class MainController {
  constructor(
    @inject("SqliteConfig") private readonly mysqlConfig: SqliteConfig
  ) { }

  public async getIndex(request: FastifyRequest, reply: FastifyReply) {


    try {

      const knex = this.mysqlConfig.getConnection();

      const results = await knex("product")
        .where("store_id", 1)
        .limit(10);


      knex.destroy((err: Error | undefined) => {
        if (err) {
          console.error("Error closing the connection:", err);
        }
      });

      return reply.send({ total: 200, results });
    } catch (error) {
      console.error("Erro na consulta:", error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  }
}