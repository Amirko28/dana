import type { NextPage } from 'next';
import Head from 'next/head';
import { LandingPage } from '../components/LandingPage';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>דנה כתר</title>
            </Head>
            <LandingPage />
        </>
    );
};

export default Home;
