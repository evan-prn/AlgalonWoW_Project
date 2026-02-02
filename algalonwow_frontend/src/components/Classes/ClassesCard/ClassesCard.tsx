import styles from "./ClassesCard.module.css";

interface Props {
    name: string;
    icon?: string; // Optionnel pour icône spécifique
}

const ClassesCard = ({ name, icon = "🛡️" }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.name}>{name}</div>
        </div>
    );
};

export default ClassesCard;
