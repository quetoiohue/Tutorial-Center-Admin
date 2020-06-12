import axiosApi, { setupAxios } from "../../../utils/request";
import store from "../../store";

const userApi = () => {
  setupAxios(store);
  return {
    getUsers: ({ offset, limit }) => {
      return axiosApi.get(`/api/admin/users/${offset}/${limit}`);
    },
    getUserById: (userId) => {
      return axiosApi.get(`/api/admin/users/view/${userId}`);
    },
    addUser: (params) => {
      return axiosApi.post('/api/admin/users', {
        ...params
      })
    },
    setUserRoles: ({id, roles}) => {
      return axiosApi.post(`/api/admin/users/roles/${id}`, {
        roles
      })
    },
    deleteUserById: (id) => {
      return axiosApi.delete(`/api/admin/users/${id}`)
    },
    setUserStatus: ({id, is_active}) => {
      return axiosApi.post(`/api/admin/users/status/${id}`, {
        is_active
      })
    }
  };
};

export default userApi;
