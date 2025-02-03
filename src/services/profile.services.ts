import { axiosInstance } from "@/services/baseConfig";
import { profileMeService } from "@/services/routes";

/* signin service */
export const myProfile = async () => {
  try {
    const res = await axiosInstance.get(profileMeService);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};
