import { axiosInstance } from "@/services/baseConfig";
import { profileMeService, profilesService } from "@/services/routes";

/* profile service */
export const myProfile = async () => {
  try {
    const res = await axiosInstance.get(profileMeService);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

/* user list service */
export const userProfiles = async () => {
  try {
    const res = await axiosInstance.get(`${profilesService}?role=all`);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};
