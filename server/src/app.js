import express from 'express'
import cors from 'cors'
import { env } from './config/env.js'
import apiRoutes from './routes/index.js'
import notFound from './middlewares/notFound.js'
import errorHandler from './middlewares/errorHandler.js'
import requestLogger from './middlewares/requestLogger.js'

const app = express()

app.use(cors({ origin: env.clientOrigin }))
app.use(express.json())
app.use(requestLogger)

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.use('/api', apiRoutes)

app.use(notFound)
app.use(errorHandler)

export default app
