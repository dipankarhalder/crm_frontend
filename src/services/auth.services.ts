import { axiosInstance } from "@/services/baseConfig";
import { loginService, registerService } from "@/services/routes";
import { IUserSignin, IUserRequest } from "@/interface";

/* signin service */
export const loginUser = async (payload: IUserSignin) => {
  try {
    const res = await axiosInstance.post(loginService, payload);
    return res;
  } catch (error: unknown) {
    return error;
  }
};

/* signup service */
export const registerUser = async (payload: IUserRequest) => {
  try {
    const res = await axiosInstance.post(registerService, payload);
    console.log(res);
    return res;
  } catch (error: unknown) {
    return error;
  }
};
