import express from 'express'
import cors from 'cors'
import apiRoutes from './routes/index.js'
import notFound from './middlewares/notFound.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.use('/api', apiRoutes)

app.use(notFound)
app.use(errorHandler)

export default app
