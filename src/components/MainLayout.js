import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Testimonycard from '../components/utilities/TestimonyCard';
const axios = require('axios');


const Mainlayout = () => {
    //axios.post('/api/posts', { title: "Foo Bar", postBody: "foo-bar", body: "lorem ipsum" })
    useEffect(() => {
        //effect
        return () => {
            //cleanup
        };
    }, []);
    return (
        <>
            <title>ChillVibes</title>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <h1 className={styles.title}>Welcome and explore!</h1>
                    <h3 className={styles.welcome_message}>Here we advocate healthier choices for people seeking a change but don't know where to start</h3>
                </div>
            </main>
        </>
    );
}

export default Mainlayout;
