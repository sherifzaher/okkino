/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import helmet from '@fastify/helmet'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
  app.enableCors()
  // TODO: contentSecurityPolicy should be turn on in production
  await app.register(helmet, { contentSecurityPolicy: false })
  const port = process.env.PORT || 3333
  await app.listen(port)
  Logger.log(`🚀 Application playground is running on: http://localhost:${port}/graphiql`)
}

// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrap().then(console.log)
