// styles
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="text-muted">
          © {currentYear} Curso Dev-F.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
