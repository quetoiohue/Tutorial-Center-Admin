import axiosApi, { setupAxios } from "../../../utils/request";
import store from "../../store";

const roleApi = () => {
  setupAxios(store);
  return {
    getRoles: () => {
      return axiosApi.get(`/api/admin/permissions`);
    }
  };
};

export default roleApi;
