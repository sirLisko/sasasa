import { NetlifyForm, Honeypot } from "react-netlify-forms";
import useLang from "../hooks/useLang";
import styles from "./Contacts.module.scss";

const ContactForm = () => {
  const lang = useLang();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>{lang === "it" ? "Contattaci" : "Contact us"}:</h2>
        <NetlifyForm name="Contact" action="/thanks" honeypotName="bot-field">
          {({ handleChange, success, error }) => (
            <>
              <Honeypot />
              {success && (
                <p>
                  {lang === "it"
                    ? "Grazie per contattarci"
                    : "Thanks for getting in touch"}
                  !
                </p>
              )}
              {error && (
                <p>
                  {lang === "it"
                    ? "C'è stato un problema, ce ne scusiamo, riprova più tardi"
                    : "Ops! There was a problem, please retry later"}
                  .
                </p>
              )}
              <div>
                <label htmlFor="name">{lang === "it" ? "Nome" : "Name"}:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="telefono">
                  {lang === "it" ? "Telefono" : "Phone"}:
                </label>
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message">
                  {lang === "it" ? "Messaggio" : "Message"}:
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  rows="10"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <button type="submit">
                  {lang === "it" ? "Invia" : "Send"}
                </button>
              </div>
            </>
          )}
        </NetlifyForm>
      </div>
    </div>
  );
};

export default ContactForm;
