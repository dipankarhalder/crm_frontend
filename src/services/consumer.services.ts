import { axiosInstance } from "@/services/baseConfig";
import { consumerListService } from "@/services/routes";

/* consumer list service */
export const consumerLists = async () => {
  try {
    const res = await axiosInstance.get(consumerListService);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};
