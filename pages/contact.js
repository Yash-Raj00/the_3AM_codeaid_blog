import React from "react";
import styles from "../styles/contact.module.css";

const contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formLabel}>
            Enter your name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formLabel}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className={styles.formText}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputPassword1" className={styles.formLabel}>
            Phone no:
          </label>
          <input type="phone" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-floating">
          <label className={styles.formLabel}htmlFor="floatingTextarea">Elaborate your concern-</label>
          <textarea
            className={styles.textArea}
            placeholder="Write your concern here"
            id="floatingTextarea"
          ></textarea>
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
