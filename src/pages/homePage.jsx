import React, { useState, useEffect } from 'react';


const HomePage = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://api.github.com/repos/tannerlinsley/react-query')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    return (
        <>
            Home Page
        </>
    );
}

export default HomePage;