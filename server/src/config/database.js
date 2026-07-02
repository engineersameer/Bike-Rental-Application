import mongoose from 'mongoose'

export async function connectDatabase(uri) {
  if (!uri) {
    return null
  }

  return mongoose.connect(uri)
}
