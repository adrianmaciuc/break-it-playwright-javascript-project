import axios from 'axios';
import { API_ENDPOINT} from './constants';
import { APP_URL } from './constants';

const apiClient = {
    get: async(config = {}) => {
        try{
            const response = await axios.get(`${API_ENDPOINT}${APP_URL}`, config)
            return response.data;
        } catch(error) {
            console.error('GET Request Failed', error);
            throw error;
        }
    }
}
