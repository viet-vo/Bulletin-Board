import { useState } from 'react';

export const useInputChange = () => {
    const [input, setInput] = useState({});

    const handleInputChange = (e) => setInput({
        ...input,
        [e.target.id]: e.target.value
    });

    return [input, handleInputChange]
};