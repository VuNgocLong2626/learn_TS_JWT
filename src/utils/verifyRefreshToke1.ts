import jwt from "jsonwebtoken";


const verifyRefreshToken = (payload: Object) => {
  try {
    const accessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_PRIVATE_KEY || "",
        { expiresIn: `${process.env.ACCESS_TOKEN_EXPIRES_IN || 15}m` }
      );
    return Promise.resolve({ accessToken });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default verifyRefreshToken;
