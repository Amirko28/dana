import type { NextPage } from 'next';
import Head from 'next/head';
import { Body } from '../components/Body';

const Form: NextPage = () => {
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
            <Body />
        </>
    );
};

export default Form;
