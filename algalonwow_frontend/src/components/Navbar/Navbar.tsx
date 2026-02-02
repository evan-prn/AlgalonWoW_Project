import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <span className={styles.title}>Algalon<span className={styles.highlight}>WoW</span></span>
            </div>
            <ul className={styles.menu}>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/classes">Classes</Link></li>
                <li><Link to="/talents">Talents</Link></li>
                <li><Link to="/guides">Guides</Link></li>
                <li><Link to="/forum">Forum</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
