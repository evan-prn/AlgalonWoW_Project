import styles from './Footer.module.css';

const Footer = () => {

    return (
        <footer className={styles.footer}>

            <div className={styles.inner}>

                <div className={styles.left}>

                    <h3 className={styles.title}>Algalon<span className={styles.highlight}>WoW</span></h3>
                    <p className={styles.sub}>Serveur & Communauté</p>
                </div>

                <div className={styles.right}>

                    <p className={styles.text}>© 2026 AlgalonWoW — Tous droits réservés</p>
                    <p className={styles.subtext}>Inspiré par l’univers de World of Warcraft</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;