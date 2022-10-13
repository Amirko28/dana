import type { NextPage } from 'next';
import Head from 'next/head';
import { Body } from '../components/Body';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>דנה כתר</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Body />
        </>
    );
};

export default Home;
