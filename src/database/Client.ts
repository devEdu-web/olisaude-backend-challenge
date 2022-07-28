import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config({
  path: '../../.env'
})

let Client: PrismaClient;
const environment = process.env.ENVIRONMENT

if(environment == 'development') {
  Client = new PrismaClient()
} else {
  Client = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DEV_DATABASE_URL,
      },
    },
  })
}

export default Client