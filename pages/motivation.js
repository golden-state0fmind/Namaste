import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'

function Motivation(){
    return (
    <div className={styles.card} >
        <Button variant='contained' color='primary' href='/' > Home </Button> <br/>
        Welcome to the motivaion page
    </div>
    )
}

export default Motivation