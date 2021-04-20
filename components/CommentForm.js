import React from 'react'
import style from '../styles/CommentsForm.module.css'
import Button from '@material-ui/core/Button'
import SendSharpIcon from '@material-ui/icons/SendSharp';
import { Typography } from '@material-ui/core';

export default function CommentForm() {
    return (
        <form className={style.formContainer}>
            <label>
                <Typography variant="h6" >
                    What effective recipes do you find useful in keeping a healthy balance in life?
                </Typography>
            </label>
                <textarea className={style.textArea}></textarea>
                <Button size="small" variant='contained' color='primary' className={style.submitButton} type="submit">Share my comment <SendSharpIcon/></Button>
        </form>
    )
}

