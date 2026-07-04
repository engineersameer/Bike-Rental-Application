export default function errorHandler(error, _request, response, _next) {
  const statusCode = response.statusCode && response.statusCode !== 200 ? response.statusCode : 500

  console.error(`[ERROR] ${statusCode} ${error.message || 'Internal server error'}`)

  response.status(statusCode).json({
    message: error.message || 'Internal server error',
  })
}
