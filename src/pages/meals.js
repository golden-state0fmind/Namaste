import style from '../styles/Meals.module.css';

export default function MealRecipes() {
    return (
        <div className={style.body}>
            <div className={style.card}>
                Welcome to the meal recipes for vegans and vegetarians
        </div>
            <div className={style.card}>
                <h3>CARD &rarr;</h3>
                <p>Friendly reminders to be better than yesterday.</p>
            </div>
        </div>
    );
};