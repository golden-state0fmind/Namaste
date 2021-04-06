import style from '../styles/Meals.module.css'
import MenuCard from '../components/MenuCard'
import Button from '@material-ui/core/Button'

function MealRecipes(){
    return (
    <div className={style.body}>
        <div className={style.card}>
            <Button variant='contained' color='primary' href='/' > Home </Button> <br/>
            Welcome to the meal recipes for vegans and vegetarians
        </div>
        <div className={style.container}>
            <MenuCard/>
        </div>
    </div>
    )
}

export default MealRecipes