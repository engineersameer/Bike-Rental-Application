import { authenticateUser, registerUser } from '../services/authService.js'

export async function signup(_request, response, next) {
  try {
    const result = await registerUser(_request.body)

    console.log(`[AUTH] POST /api/auth/signup -> 201 (${result.user.email})`)

    response.status(201).json({
      status: 'success',
      message: 'Account created successfully.',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export async function login(_request, response, next) {
  try {
    const result = await authenticateUser(_request.body)

    console.log(`[AUTH] POST /api/auth/login -> 200 (${result.user.email})`)

    response.status(200).json({
      status: 'success',
      message: 'Login successful.',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}