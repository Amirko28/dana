import type { NextPage } from 'next';
import Head from 'next/head';
import { IntroQuestion } from '../components/IntroQuestion';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>דנה כתר</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <IntroQuestion />
        </>
    );
};

export default Home;
