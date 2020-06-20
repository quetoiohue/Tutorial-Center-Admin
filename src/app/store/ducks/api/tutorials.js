import axiosApi, { setupAxios } from '../../../utils/request';
import store from '../../store';

const tutorialApi = () => {
    setupAxios(store);
    return ({
        getTutorials: () => {
            return axiosApi.get(`/api/admin/tutorials`)
        },
        getTutorialById: (id) => {
            return axiosApi.get(`/api/admin/tutorials/view/${id}`)
        }, 
        deleteTutorialById: (id) => {
            return axiosApi.delete(`/api/admin/tutorials/${id}`)
        },
        setActiveTutorialById: ({id, is_active}) => {
            return axiosApi.post(`/api/admin/tutorials/status/${id}`, {
                is_active
            })
        }, 
    })
}

export default tutorialApi;