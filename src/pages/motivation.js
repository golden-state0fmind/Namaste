import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import Affirmations from '../components/Affirmations'
import HomeIcon from '@material-ui/icons/Home';

function Motivation(){
    return (
    <>
        <div className={styles.card} >
            <Button variant='contained' color='primary' href='/' > Home <HomeIcon/></Button> <br/>
            Welcome to the motivaion page
        </div>
        <div className={styles.card}>
            <Affirmations/> ☮️
        </div>
    </>
    )
}

export default Motivation