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
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src="/react.svg" className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <a href="https://anilist.co/api/v2/oauth/authorize?client_id=12974&redirect_uri=http://localhost:5173/home&response_type=code">anilist</a>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <p>
                <strong>react-query</strong> repo last updated at:{' '}
                {data ? new Date(data.updated_at).toLocaleString() : 'Loading...'}
            </p>
        </>
    );
}

export default HomePage;