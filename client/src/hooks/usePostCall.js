import { useContext } from 'react';
import { PostDataContext } from '../provider/PostDataContext';

const usePostCall = () => {
    const [data] = useContext(PostDataContext);
    console.log(data);
    return data
}

export default usePostCall;