import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import CommentForm  from '../components/CommentForm'

function About(){
    return (
        <>
            <div className={styles.card}>
                <Button variant='contained' color='primary' href='/' > Home <HomeIcon/></Button>
                Share your experience
            </div>
            <div className={styles.card}>
                <CommentForm/>
            </div>
        </>
    ) 
}

export default About