import { useEffect, useState } from "react";
import styles from './CheckConnectionBackend.module.css';

const CheckConnectionBackend = () => {
    const [apiStatus, setApiStatus] = useState<string>("Chargement...");

    useEffect(() => {
        const checkStatus = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/ping");
                const data = await res.json();
                setApiStatus(`${data.app} - ${data.status}`);
            } catch {
                setApiStatus("❌ Erreur de connexion à l'API");
            }
        };

        checkStatus();
    }, []);

    return (
        <div className={styles.statusContainer}>
            <span className={styles.statusLabel}>Backend :</span>
            <span className={styles.statusValue}>{apiStatus}</span>
        </div>
    );
};

export default CheckConnectionBackend;
