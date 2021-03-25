import styles from '../styles/Home.module.css'
import MenuCard from '../components/MenuCard'

function MealRecipes(){
    return (
    <>
        <div className={styles.card}>
            Welcome to the meal recipes for vegans and vegetarians
        </div>
        <div className={styles.container}>
            <MenuCard/>
        </div>
    </>
    )
}

export default MealRecipes