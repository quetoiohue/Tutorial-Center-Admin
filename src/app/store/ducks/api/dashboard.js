import axiosApi, { setupAxios } from "../../../utils/request";
import store from "../../store";

const dashboadApi = () => {
  setupAxios(store);
  return {
    getOverview: () => {
      return axiosApi.get(`/api/admin/statistics/overview`);
    },
    getUserOverview: ({ period }) => {
      return axiosApi.get(`/api/admin/statistics/${period}/users`);
    },
    getTutorialOverview: ({ period }) => {
      return axiosApi.get(`/api/admin/statistics/${period}/tutorials`);
    },
    getCommentOverview: ({ period }) => {
      return axiosApi.get(`/api/admin/statistics/${period}/comments`);
    },
    getViewOverview: ({ period }) => {
      return axiosApi.get(`/api/admin/statistics/${period}/views`);
    }
  };
};

export default dashboadApi;
