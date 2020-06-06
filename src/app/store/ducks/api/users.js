import axiosApi, { setupAxios } from "../../../utils/request";
import store from "../../store";

const userApi = () => {
  setupAxios(store);
  return {
    getUsers: () => {
      return axiosApi.get("/api/admin/users");
    },
    getUserById: (userId) => {
      return axiosApi.get(`/api/admin/users/${userId}`);
    }
  };
};

export default userApi;
