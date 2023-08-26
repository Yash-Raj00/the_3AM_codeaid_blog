import React from "react";
import Image from "next/image";
import styles from "../styles/about.module.css";

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigSection}>
        <span>
          <h1>Solution for the problems faced by every hunting coder</h1>
          <p>
            Our basic to advance, complete collection of solutions to overcome
            any problem or error or bug.
            <br/>
            <br/>
            We all get stuck while learning something new, when we are already frustrated &#10098; it happens for a while.. &#10099; on how difficult the thing is to understand and suddenly a bug/error/fucking spelling mistake! spill full load of oil in the fire of anger.
          </p>
        </span>
        <span>
          <Image
            alt="image"
            className={styles.img}
            src={"/aboutImage.png"}
            width={580}
            height={330}
          />
        </span>
      </div>
      <hr />
      <div className={styles.imgSection}>
        <h2>Focus on four areas to solve the challenge</h2>
        <div className={styles.solSection}>
          <span className={styles.solItem}>
            <Image alt="image" className={styles.image} src={"/first.png"} width={200} height={120} />
            <h3>Vision and strategy</h3>
            <p>Defining a clear vision and strategy is key to developing a strong roadmap to help move organizations forward.</p>
          </span>
          <span className={styles.solItem}>
            <Image alt="image" className={styles.image} src={"/sec.png"} width={200} height={120} />
            <h3>Culture</h3>
            <p>Creating a unified and elastic culture that invites diversity allows for change to be positively accepted.</p>
          </span>
          <span className={styles.solItem}>
            <Image alt="image" className={styles.image} src={"/third.png"} width={200} height={120} />
            <h3>Unique potential</h3>
            <p>Amplifying your organization's unique potential transforms what you currently have to what you can become.</p>
          </span>
          <span className={styles.solItem}>
            <Image alt="image" className={styles.image} src={"/fourth.png"} width={200} height={120} />
            <h3>Capabilities</h3>
            <p>Developing your organization's capabilities continuously enables you to improve productivity and efficiency.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default about;
