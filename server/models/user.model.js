import { Schema, model } from "mongoose";
import jwt from  'jsonwebtoken';

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Please provide your full name"],
      
      teim: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      lowercase: true,
     
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [2, "Minimum length of Password should be 8"],
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
  genarateJWTToken: function () {
    return jwt.sign(
      { id: this._id,role: this.role }, 
      process.env.JWT_PASSWORD,
       {
      expiresIn: process.env.JWT_EXPIRE
    });
  },
};

const User = model("User", UserSchema);
export default User;

// export interface IUser extends Document
