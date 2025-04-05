import { FastifyInstance } from "fastify";
import { inject, injectable } from "tsyringe";
import { Router } from "@/interfaces";
import { MainController } from "@/controllers/main.controller";

@injectable()
export class MainRouter implements Router {
  constructor(
    @inject("MainController")
    private readonly mainController: MainController,
  ) {}

  public registerRoutes(
    app: FastifyInstance,
    _options?: unknown,
    done?: (err?: Error) => void,
  ): FastifyInstance {
    app.get("/hello", async (request, reply) => {
      return this.mainController.getIndex(request, reply);
    });

    if (done) {
      done();
    }

    return app;
  }
}
