import axiosApi, { setupAxios } from "../../../utils/request";
import store from "../../store";

const userApi = () => {
  setupAxios(store);
  return {
    getUsers: () => {
      return axiosApi.get("/api/admin/users");
    },
  };
};

export default userApi;
