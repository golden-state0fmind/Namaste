import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Namaste</title>
        {/* Brand Logo below in favicon*/}
        <link rel="" href="" /> 
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a href="https://www.antonioreyes.dev"> Namaste Lifestyle!</a>
        </h1>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Yoga &rarr;</h3>
            <p>lorem ipsum</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Excercise &rarr;</h3>
            <p>lorem ipsum</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Meal Recipes &rarr;</h3>
            <p>lorem ipsum</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Motivation &rarr;</h3>
            <p>
              lorem ipsum
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Antonio Reyes{' '}
          <img src="" alt="" className={styles} />
        </a>
      </footer>
    </div>
  )
}
