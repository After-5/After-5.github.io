import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainScreen from "../screens/MainScreen";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AfterFive</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainScreen />
    </div>
  );
};

export default Home;
