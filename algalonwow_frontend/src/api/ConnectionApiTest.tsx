import { useEffect, useState } from "react";


const ConnectionApiTest = () => {

    const [apiStatus, setApiStatus] = useState<string>("Loading...");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/ping")
            .then((res) => res.json())
            .then((data) => setApiStatus(`${data.app} - ${data.status}`))
            .catch(() => setApiStatus("Erreur de connexion à l'API"));
    }, []);

    return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>AlgalonWoW Frontend</h1>
            <p>Backend status : {apiStatus}</p>
        </div>
    );
}

export default ConnectionApiTest;