import type { NextPage } from 'next';
import Head from 'next/head';
import { LandingPage } from '../components/LandingPage';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>דנה כתר</title>
                <meta property="og:title" content="דנה כתר" />
                <meta name="description" content="חושבים שמגיע לכם החזר מס?" />
                <meta property="og:url" content="https://dana-ketter.vercel.app" />
                <meta property="og:description" content="חושבים שמגיע לכם החזר מס?" />
                <meta property="og:type" content="website" />
            </Head>
            <LandingPage />
        </>
    );
};

export default Home;
