/** @format */

import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.css";
import RequestForm from "../components/RequestForm";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.description_section}>
        <div className={styles.logo}>
          <img src="/PyJailBreak/PyJailBreak.png" alt="title logo" />
        </div>
        <div className={styles.description}>
          <img
            src="/PyJailBreak/logo_horizontal_cleanness.png"
            alt="PyJailBreak"
            className={styles.logo_hirizontal}
          />{" "}
          is a <br />
          <b>Black box automated vulnerability scanning tool</b>
          <br />
          for Python socket servers.
        </div>
      </div>
      <div>
        <RequestForm />
      </div>
    </Layout>
  );
};

export default Home;
