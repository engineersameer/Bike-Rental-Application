import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required.'],
      trim: true,
      maxlength: [80, 'Full name must be 80 characters or fewer.'],
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      minlength: [8, 'Password must be at least 8 characters long.'],
      select: false,
    },
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model('User', userSchema)

export default User