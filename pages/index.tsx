import type { NextPage } from 'next';
import Head from 'next/head';
import { Body } from '../components/Body';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>דנה כתר</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <Body />
    </>
  );
};

export default Home;
