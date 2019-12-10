import { useState } from 'react';
import axios from 'axios';

export default function usePost() {
    const [data] = useState([]); 
    return axios.post('/post', data);
};