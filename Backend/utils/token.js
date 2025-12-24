import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

// 🔑 Generate JWT
export const generateToken = async ({ payload, expiryTime }) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: expiryTime,
  });
};

// 🔍 Verify JWT
export const verifyToken = async (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
