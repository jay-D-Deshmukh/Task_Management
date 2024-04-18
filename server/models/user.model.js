import { Schema, model } from "mongoose";
import jwt from 'jsonwebtoken';

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Please provide your full name"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      lowercase: true,
      validate: {
        validator: function(v) {
          // Email validation regex pattern
          return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(v);
        },
        message: props => `${props.value} is not a valid email address!`
      }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Minimum length of Password should be 8"],
      maxLength: [100, "Maximum length for password exceeded"],
      select: false, // to hide the password in response
    },
    
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "ADMIN",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods = {
  generateJWTToken: function () {
    return jwt.sign(
      { id: this._id, role: this.role }, 
      process.env.JWT_PASSWORD,
      {
        expiresIn: process.env.JWT_EXPIRE
      }
    );
  },
};

const User = model("User", UserSchema);
export default User;
