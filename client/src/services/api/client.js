const DEFAULT_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

export async function request(path, options = {}) {
  const response = await fetch(`${DEFAULT_API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
    ...options,
  })

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`

    try {
      const errorBody = await response.json()
      if (errorBody?.message) {
        message = errorBody.message
      }
    } catch (_error) {
      const responseText = await response.text()
      if (responseText) {
        message = responseText
      }
    }

    throw new Error(message)
  }

  return response.json()
}

export { DEFAULT_API_BASE_URL }
