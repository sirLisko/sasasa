import styles from "./Home.module.scss";
import { ReactComponent as Logo } from "../logo.svg";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div className={styles.splash}>
      <h1>
        <span className="logo">
          <Logo />
        </span>
        Sa Sa Sa s.r.l.
      </h1>
      <div className={styles.blurp}>
        <p>
          Sa Sa Sa S.r.l. è una società di Milano che dispone di due studi con
          sale prova insonorizzate ad affitto orario. Effettua inoltre altri
          servizi in ambito musicale come registrazioni e noleggio
          strumentazione. Puoi trovare informazioni aggiornate sui siti web dei
          nostri studi.
        </p>
        <p>
          Sa Sa Sa S.r.l. is a company in Milan. We have two studios with
          soundproof rehearsal rooms that you can rent by the hour. We also
          provide other services like recordings and equipment rental. You can
          find updated information on our websites.
        </p>
      </div>
      <div className={styles.cards}>
        <Card
          className="kubi"
          address="Kubi SoundLab,Milan+IT"
          title="Kubì"
          subtitle="Soundlab"
          link="https://www.kubisoundlab.com/"
          socials={{
            fb: "https://www.facebook.com/kubi.soundlab",
            in: "https://www.instagram.com/kubi_soundlab/",
          }}
        />
        <Card
          className="menodue"
          address="Menodue Studio,Milan+IT"
          title="Menodue"
          subtitle="Studio"
          link="https://www.menoduestudio.com/"
          socials={{
            fb: "https://www.facebook.com/menoduestudio",
            in: "https://www.instagram.com/menoduestudio/",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
