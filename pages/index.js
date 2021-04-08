import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Namste</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome and start living a balanced <a href="https://www.antonioreyes.dev">Lifestyle!</a>
        </h1>

        <div className={styles.grid}>
          <a
            href="/motivation"
            className={styles.card}
          >
            <h3>Motivation &rarr;</h3>
            <p>Not feeling pumped today? That's okay feel free to drop a blurb for some uplifting responses.</p>
          </a>
          
          <a href="/excercise" className={styles.card}>
            <h3>Excercise &rarr;</h3>
            <p>This will be a reference point to look into different workouts to stay fit and happy.</p>
          </a>

          <a
            href="/meals"
            className={styles.card}
          >
            <h3>Meal Recipes &rarr;</h3>
            <p>Flavor jam packed vegan and vegetarian recipes will be shared weekly as a tasty treat.</p>
          </a>

          <a href="/comments" className={styles.card}>
            <h3>Share here &rarr;</h3>
            <p>Leave comments here about some of your favorite ways of keeping balance.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.antonioreyes.dev"
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
