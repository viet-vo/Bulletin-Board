import axios from 'axios';

export default {
    submit: data => {
        return axios.post('/post', data);
    },
    read: () => {
        return axios.get('/post');
    }
};