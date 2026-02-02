import { useEffect, useState } from "react";
import ClassesCard from "../ClassesCard/ClassesCard";
import styles from "./ClassesList.module.css";

const ClassesList = () => {
    const [classes, setClasses] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/wow/classes");
                const data = await res.json();
                setClasses(data.classes || []);
            } catch {
                setError("❌ Erreur de connexion à l'API Blizzard");
            }
        };

        fetchClasses();
    }, []);

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>CLASSES DE WORLD OF WARCRAFT</h1>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.grid}>
                {classes.map((classe) => (
                    <ClassesCard key={classe.id} name={classe.name.fr_FR} />
                ))}
            </div>
        </section>
    );
};

export default ClassesList;
