import styles from '../styles/Home.module.css';
import Affirmations from '../components/Affirmations';

export default function Motivation() {
    return (
        <>
            <div className={styles.card} >
                <a variant='contained' color='primary' href='/' > Home </a> <br />
            Welcome to the motivaion page
        </div>
            <div className={styles.card}>
                <Affirmations /> ☮️
        </div>
        </>
    )
}