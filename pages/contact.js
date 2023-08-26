import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc);
    const data = {name, email, phone, desc};

    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
      console.log('Success:', data);
      alert("Thanks for contacting us.");
      setName('');
      setEmail('');
      setPhone('');
      setDesc('');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');
  
  const handleChange = (e) => {
    if(e.target.id == 'name')
    {
      setName(e.target.value);
    }
    if(e.target.id == 'email')
    {
      setEmail(e.target.value);
    }
    if(e.target.id == 'phone')
    {
      setPhone(e.target.value);
    }
    if(e.target.id == 'desc')
    {
      setDesc(e.target.value)
    }
  }
  
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formLabel}>
            Enter your name:
          </label>
          <input
            type="text"
            required
            className={styles.input}
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formLabel}>
            Email address:
          </label>
          <input
            type="email"
            required
            className={styles.input}
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
          <div id="emailHelp" className={styles.formText}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formLabel}>
            Phone no:
          </label>
          <input
            type="phone"
            className={styles.input}
            id="phone"
            placeholder="Enter your number"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-floating">
          <label className={styles.formLabel} htmlFor="desc">
            Elaborate your concern -
          </label>
          <textarea
            className={styles.textArea}
            placeholder="Write your concern here"
            id="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
