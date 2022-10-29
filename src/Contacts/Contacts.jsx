import { NetlifyForm, Honeypot } from "react-netlify-forms";
import styles from "./Contacts.module.scss";

const ContactForm = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <h2>Contattaci:</h2>
      <NetlifyForm name="Contact" action="/thanks" honeypotName="bot-field">
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            {success && <p>Grazie per contattarci!</p>}
            {error && (
              <p>C'è stato un problema, ce ne scusiamo, riprova più tardi.</p>
            )}
            {/* <input type="hidden" name="form-name" value="contact" /> */}
            <div>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="telefono">Telefono:</label>
              <input
                type="text"
                name="telefono"
                id="telefono"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Messaggio:</label>
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
              <button type="submit">Invia</button>
            </div>
          </>
        )}
      </NetlifyForm>
    </div>
  </div>
);

export default ContactForm;
