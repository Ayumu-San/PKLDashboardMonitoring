import styles from "../assets/styles/Databases.module.css";

const Footer = () => (
    <footer class={styles.footer}>
        <div class={styles.footerAboveDiv}>
            <div class={styles.rightcontainer}>
                <h2 class={styles.h1}>DocterPedia</h2>
                <div class={styles.pengaduan}>
                    <h5 class={styles.h5}>Layanan Pengaduan Konsumen</h5>
                    <p class={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra velit. Lorem ipsum dolor sit amet.</p>
                </div>
                <div class={styles.alamat}>
                    <h5 class={styles.h5}>Alamat:</h5>
                    <p class={styles.p}>Lorem ipsum dolor sit amet, adipiscing elit. Aenean eu pharetra velit.</p>
                </div>
            </div>
            <div class={styles.leftcontainer}>
                <div class={styles.DocterSign}>
                    <h5 class={styles.h5}>Apakah kamu seorang dokter?</h5>
                    <button class={styles.button}>Sign Up!</button>
                </div>
            </div>
        </div>
        <div class={styles.footerBottom}>
            <p class={styles.p}>
                Dibuat oleh <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class={styles.a}>EJBFSUE</a>.
                WFEHIEWF <a href="#">HOME</a>.
            </p>
        </div>
    </footer>
);

export default Footer;
