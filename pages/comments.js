import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'

function About(){
    return(
    <div className={styles.card}>
        <Button variant='contained' color='primary' href='/' > Home </Button>
        Share your experience
    </div>
    ) 
}

export default About