import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.content}>
          <img src="/images/background.jpg" width="800" alt="Background" />
          <div className={styles.contentText}>
            <h2 className={styles.h2}>Who we are?</h2>
            <p>
              At Lavazza Coffee Shop, we take great pride in offering premium
              coffee blends and delightful treats. Whether you&apos;re stopping
              by for a quick boost or looking to unwind with a leisurely drink,
              we have something for everyone. Our mission is to create a cozy,
              welcoming environment where coffee lovers can savor the finest
              beverages, crafted with passion and attention to detail.
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.section2}`}>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <h2 className={styles.h2}>Our Story</h2>
            <p>
              Founded with a love for exceptional coffee, Lavazza Coffee Shop
              started as a small cafe focused on delivering the authentic
              Italian coffee experience. Over the years, we’ve grown into a
              beloved destination for coffee enthusiasts, combining tradition
              with modern flair. <br /> <br />
              At Lavazza, every cup is crafted from high-quality beans sourced
              from sustainable farms around the world, ensuring every sip is
              rich and flavorful. Our menu has expanded to include a variety of
              beverages, from classic espresso to creative lattes, alongside a
              selection of fresh pastries, sandwiches, and sweet treats. <br />{" "}
              <br />
              We believe in the art of coffee-making and strive to create the
              perfect balance of taste and experience for each customer.
            </p>
          </div>
          <img src="/images/about2.jpg" width="550" alt="Background" />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.content}>
          <div className="flex flex-col">
            <img src="/images/about3.jpg" width="1500" alt="Background" />
            <img src="/images/about4.jpg" width="1500" alt="Background" />
          </div>

          <div className={styles.contentText}>
            <h2 className={styles.h2}>Our Mission & Values</h2>
            <p>
              At the heart of Lavazza Coffee Shop is a commitment to quality,
              community, and sustainability. We believe in:
            </p>
            <ul className={styles.ul}>
              <li>
                <strong>Premium Quality:</strong> Only the best coffee beans are
                used in our blends, roasted to perfection to bring out their
                unique flavors.
              </li>
              <li>
                <strong>Sustainability:</strong> We are dedicated to ethical
                sourcing, working closely with farmers to support fair trade
                practices.
              </li>
              <li>
                <strong>Customer Experience:</strong> We aim to create a
                welcoming atmosphere where everyone feels at home. Whether
                you’re looking to enjoy a warm drink, our friendly staff is here
                to make your experience memorable.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
