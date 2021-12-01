import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
const axios = require('axios');

export default function Home() {

  //axios.post('/api/posts', { title: "Foo Bar", postBody: "foo-bar", body: "lorem ipsum" });
  return (
    <Parallax pages={2} className={styles.parallaxMainWrapper}>
      <Head>
        <title>Namaste</title>
      </Head>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', 
        }}>
        <div className={styles.landingDiv} >
        </div>
          <div className={styles.landingPageText}>Namaste</div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ffff' }} />
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#000',
        }}>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome and start living a balanced <a href="https://www.antonioreyes.dev">Lifestyle!</a>
            </h1>
            <div className={styles.grid}>
              {/* Motivation section */}
              <a href="/motivation" className={styles.card}>
                <h3>Motivation &rarr;</h3>
                <p>Friendly reminders to be better than yesterday.</p>
              </a>
              {/* Excercise section */}
              <a href="/exercise" className={styles.card}>
                <h3>Exercise &rarr;</h3>
                <p>This will be a reference point to look into different workouts to stay fit and happy.</p>
              </a>
              {/* Meals section */}
              <a href="/meals" className={styles.card}>
                <h3>Meal Recipes &rarr;</h3>
                <p>Flavor jam packed vegan and vegetarian recipes will be shared weekly as a tasty treat.</p>
              </a>
              {/* Comments section this will need to reviewed for rendering comments from firebase*/}
              {/* <a href="/comments" className={styles.card}>
                <h3>Share here &rarr;</h3>
                <p>Leave comments here about some of your favorite ways of keeping balance.</p>
              </a> */}
            </div>
            {/* Footer */}
            <footer className={styles.footer}>
              <a
                href="https://www.antonioreyes.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#169; Antonio Reyes 2021{' '}
                <img src="" alt="" className={styles} />
              </a>
            </footer>
          </main>
      </ParallaxLayer>
    </Parallax>
  );
};
