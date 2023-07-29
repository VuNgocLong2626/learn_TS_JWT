import { LoginUserInput } from "@interface/shemas/user.shemas";
import jwt from "jsonwebtoken";

async function generateTokens(user: LoginUserInput) {
  try {
    const payload = { _id: user.email };
    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_PRIVATE_KEY || "",
      { expiresIn: `${process.env.ACCESS_TOKEN_EXPIRES_IN || 15}m` }
    );
    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_PRIVATE_KEY || "",
      { expiresIn: `${process.env.REFRESH_TOKEN_EXPIRES_IN || 15}m` }
    );
    return Promise.resolve({ accessToken, refreshToken });
  } catch (err) {
    return Promise.reject(err);
  }
}

export default generateTokens;
