import type { NextPage } from 'next';
import Head from 'next/head';
import { IntroQuestion } from '../components/IntroQuestion';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>דנה כתר</title>
            </Head>
            <IntroQuestion />
        </>
    );
};

export default Home;
