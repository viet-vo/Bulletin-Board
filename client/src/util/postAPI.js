import axios from 'axios';

export default {
    post: data => {
        return axios.post('/post', data);
    }
};