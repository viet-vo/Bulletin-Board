import { useState } from 'react';
import api from "../util/API";

export const useSubmitPost = (e, submitData) => {
    const [data, setData] = useState({});

    console.log(data);
    const handleSubmit = () => {
        e.preventDefault();
        api.submit(submitData)
            .then(data => data.status === 200 ? console.log(data) : console.log("Placeholder Expression!"))
            .catch(err => console.log(err));
        setData({});
    };

    return [handleSubmit]
};