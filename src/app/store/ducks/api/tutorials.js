import axiosApi, { setupAxios } from '../../../utils/request';
import store from '../../store';

const tutorialApi = () => {
    setupAxios(store);
    return ({
        getTutorials: ({offset, limit}) => {
            return axiosApi.get(`/api/admin/tutorials/${offset}/${limit}`)
        },
        getTutorialById: (id) => {
            return axiosApi.get(`/api/admin/tutorials/view/${id}`)
        },
    })
}

export default tutorialApi;