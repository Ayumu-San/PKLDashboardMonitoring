import { Link } from "@solidjs/router";
import styles from "../assets/styles/Databases.module.css";

const Header = ({ userRole, username }) => (
    <header class={styles.header}>
        <div class={styles.headerContainer}>
            <div class={styles.logoH1}>
                <h1>Dokterpedia</h1>
            </div>
            <div class={styles.nav} data-visible="false">
                <ul class={styles.ul}>
                    <li class={styles.li}><Link href="/login">Home</Link></li>
                    <li class={styles.li}><Link href="/login">Login</Link></li>
                    <li class={styles.li}><Link href="/new">Jadwal</Link></li>
                    {userRole === "Admin" && (
                        <li class={styles.li}><Link href="/account-manage">Akun</Link></li>
                    )}
                </ul>
            </div>
            <button aria-expanded="false" class={styles.mobile_navigation} aria-label="open"></button>
        </div>
    </header>
);

export default Header;
