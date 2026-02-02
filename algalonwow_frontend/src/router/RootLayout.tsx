import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import styles from "./RootLayout.module.css";

const RootLayout = () => {

    return (

        <div className={styles.layoutContainer}>
            <Navbar />

            <main className={styles.layoutContent}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default RootLayout;
