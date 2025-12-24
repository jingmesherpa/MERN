import bcrypt from "bcrypt";

// Hash password
export const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Compare password
export const comparePassword = async ({hashedpassword, password}) => {
  return await bcrypt.compare(password, hashedpassword);
};
