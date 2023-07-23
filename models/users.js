import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Must provide a name'],
      maxlength: [30, 'Name cannot exceed 30 characters'],
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Must provide an email'],
      maxlength: [30, 'Name cannot exceed 30 characters'],
    },
    age: {
      type: Number,
    },
    address: {
      flat: { type: String, trim: true },
      streets: { type: String, trim: true },
      area: { type: String, trim: true },
      district: { type: String, trim: true },
      country: { type: String, trim: true },
      postalCode: { type: String, trim: true },
    },
    salary: {
      type: Number,
    },
    visibility: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);

export default User;
