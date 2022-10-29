import styles from "./Card.module.scss";
import { RiInstagramLine } from "react-icons/ri";
import { ReactComponent as Linktree } from "./linktree.svg";
import { ReactComponent as Logo } from "../logo.svg";

const Card = ({ className, address, title, subtitle, link, socials }) => (
  <div className={`${styles[className]} ${styles.card}`}>
    <div className={styles.header}>
      <h2 className={styles.title}>
        <a className={styles.link} href={link}>
          <span className="logo">
            <Logo />
          </span>
          <div>
            {title}
            <span className={styles.subtitle}>{subtitle}</span>
          </div>
        </a>
      </h2>
      <div className={styles.social}>
        <a href={socials.fb}>
          <Linktree />
        </a>
        <a href={socials.in}>
          <RiInstagramLine />
        </a>
      </div>
    </div>
    <iframe
      title="map"
      width="100%"
      height="350"
      frameBorder="0"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GMAP_API}&q=${address}`}
    />
  </div>
);

export default Card;
