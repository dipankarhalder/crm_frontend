import { axiosInstance } from "@/services/baseConfig";
import { consumerAddService, consumerListService } from "@/services/routes";

/* consumer list service */
export const consumerLists = async () => {
  try {
    const res = await axiosInstance.get(consumerListService);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

/* add new consumer service */
export const addNewConsumer = async (payload: any) => {
  try {
    const res = await axiosInstance.post(consumerAddService, payload);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};
