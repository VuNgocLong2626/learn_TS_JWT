import { IUser, IUserRegsiter } from "@interface/models/user";
import generateTokens from "../utils/generateTokens";

class AccessServices {
  static signUp = async (userData: IUserRegsiter) => {
    /* Check data */

    const { accessToken, refreshToken } = await generateTokens(userData);

    return { accessToken, refreshToken };
  };

  static logIn = async (userData: IUser) => {
    /* Check data*/

    const { accessToken, refreshToken } = await generateTokens(userData);
    
    return { accessToken, refreshToken };
  };
}

export default AccessServices;
