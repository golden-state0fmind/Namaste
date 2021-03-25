import styles from '../styles/Home.module.css'
import MenuCard from '../components/MenuCard'
import Button from '@material-ui/core/Button'

function MealRecipes(){
    return (
    <>
        <div className={styles.card}>
            <Button variant='contained' color='primary' href='/' > Home </Button> <br/>
            Welcome to the meal recipes for vegans and vegetarians
        </div>
        <div className={styles.container}>
            <MenuCard/>
        </div>
    </>
    )
}

export default MealRecipes