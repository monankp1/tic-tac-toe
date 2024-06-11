import { useState, useEffect } react from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data));
    }, [url]);
    return [data];
};



//so instead of fetching and coverting data to json everytime, we just created a custom hook which will fetch data and return is json data.