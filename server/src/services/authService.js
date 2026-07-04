import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'
import User from '../models/userModel.js'
import AppError from '../utils/appError.js'

function serializeUser(user) {
  return {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
}

function createAuthToken(userId) {
  return jwt.sign({ sub: userId }, env.jwtSecret, { expiresIn: env.jwtExpiresIn })
}

function normalizeEmail(email) {
  return email.trim().toLowerCase()
}

function validateAuthPayload(payload, requireFullName = false) {
  const fullName = payload.fullName?.trim()
  const email = payload.email?.trim()
  const password = payload.password

  if (requireFullName && !fullName) {
    throw new AppError('Full name is required.', 400)
  }

  if (!email) {
    throw new AppError('Email is required.', 400)
  }

  if (!password) {
    throw new AppError('Password is required.', 400)
  }

  if (password.length < 8) {
    throw new AppError('Password must be at least 8 characters long.', 400)
  }

  return { fullName, email: normalizeEmail(email), password }
}

export async function registerUser(payload) {
  const { fullName, email, password } = validateAuthPayload(payload, true)

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new AppError('An account with this email already exists.', 409)
  }

  const hashedPassword = await bcrypt.hash(password, 12)
  const user = await User.create({ fullName, email, password: hashedPassword })

  return {
    token: createAuthToken(user._id.toString()),
    user: serializeUser(user),
  }
}

export async function authenticateUser(payload) {
  const { email, password } = validateAuthPayload(payload)

  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    throw new AppError('Invalid email or password.', 401)
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    throw new AppError('Invalid email or password.', 401)
  }

  return {
    token: createAuthToken(user._id.toString()),
    user: serializeUser(user),
  }
}