import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      {/* <NavBar/> */}
      {/* main container div */}
      <div className={styles.container}>
        <Head>
          <title>Namaste</title>
        </Head>
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
            <a href="/excercise" className={styles.card}>
              <h3>Excercise &rarr;</h3>
              <p>This will be a reference point to look into different workouts to stay fit and happy.</p>
            </a>
            {/* Meals section */}
            <a href="/meals" className={styles.card}>
              <h3>Meal Recipes &rarr;</h3>
              <p>Flavor jam packed vegan and vegetarian recipes will be shared weekly as a tasty treat.</p>
            </a>
            {/* Comments section */}
            <a href="/comments" className={styles.card}>
              <h3>Share here &rarr;</h3>
              <p>Leave comments here about some of your favorite ways of keeping balance.</p>
            </a>
          </div>
        </main>
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
      </div>
    </>
  )
}
