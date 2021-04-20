import React from 'react'
//import {workouts} from './api/workouts'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';

function Excercise() {
    
    return (
    <div className={ styles.card } >
        <Button variant='contained' color='primary' href='/' > Home <HomeIcon/> </Button> <br/>
        Welcome to the workout page
    </div>
        )
}

export default Excercise