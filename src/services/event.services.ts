import { axiosInstance } from "@/services/baseConfig";
import { eventListService } from "@/services/routes";

/* consumer list service */
export const eventLists = async () => {
  const res = await axiosInstance.get(eventListService);
  return res.data;
};
