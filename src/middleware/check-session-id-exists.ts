import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  replay: FastifyReply,
) {
  const sessionId = request.cookies.sessionId
  console.log(sessionId)

  if (!sessionId) {
    return replay.status(401).send({
      message: 'Unauthorized',
    })
  }
}
