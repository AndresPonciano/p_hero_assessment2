import { useState, useEffect } from 'react';
import axios from 'axios';

export const useNasapi = (url) => {
    const [values, setValues] = useState({});

    useEffect(() => {
        axios.get(url).then((response) => {
            setValues(response.data);
        });
    }, [url]);

    return values;
};
