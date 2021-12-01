import React from 'react';
//import {workouts} from './api/workouts'
import styles from '../styles/Exercise.module.css';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

function Exercise() {
    
    return (
        <>
            <div className={styles.body}>
                <div className={styles.card} >
                    <Button variant='contained' color='primary' href='/' > Home <HomeIcon /> </Button> <br />
                Welcome to the workout page
            </div>
                <h3 className={styles.card} >
                    Under Construction this page will be up soon!
            </h3>
            </div>
        </>
    );
};

export default Exercise;