import { axiosInstance } from "@/services/baseConfig";
import { loginService } from "@/services/routes";

/* signin service */
export const loginUser = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const res = await axiosInstance.post(loginService, payload);
    console.log(res);
    return res;
  } catch (error: unknown) {
    return error;
  }
};
