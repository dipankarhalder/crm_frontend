import { axiosInstance } from "@/services/baseConfig";
import { loginService, registerService } from "@/services/routes";
import { IUserSignin, IUserRequest } from "@/interface";

/* signin service */
export const loginUser = async (payload: IUserSignin) => {
  try {
    const res = await axiosInstance.post(loginService, payload);
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error.response.data;
  }
};

/* signup service */
export const registerUser = async (payload: IUserRequest) => {
  try {
    const res = await axiosInstance.post(registerService, payload);
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error.response.data;
  }
};
