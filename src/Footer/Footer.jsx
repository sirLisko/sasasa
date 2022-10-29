import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    <div>
      SA SA SA S.r.l. - sede legale: via Sannio 4 20137 Milano - P.IVA / C.F.
      12364520960 - REA n. MI - 2657003 - Ufficio del registro delle imprese di
      Milano - Capitale sociale 10.000€
    </div>
    <div className={styles.credits}>
      Made with ♥ by{" "}
      <a href="https://sirlisko.com">Luca Lischetti (@sirLisko)</a>
    </div>
  </div>
);

export default Footer;
