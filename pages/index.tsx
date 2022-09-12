import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Background from "../components/Background";
import MainScreen from "../screens/MainScreen";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AfterFive</title>
        <meta name="description" content="After5 landing paage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <MainScreen />
    </div>
  );
};

export default Home;
