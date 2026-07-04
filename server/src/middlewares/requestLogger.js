export default function requestLogger(request, response, next) {
  const startedAt = Date.now()

  response.on('finish', () => {
    const duration = Date.now() - startedAt
    const isAuthRoute = request.originalUrl.startsWith('/api/auth')

    if (isAuthRoute || request.originalUrl === '/health') {
      console.log(
        `[REQUEST] ${request.method} ${request.originalUrl} -> ${response.statusCode} (${duration}ms)`,
      )
    }
  })

  next()
}