import React from 'react'
import style from '../styles/CommentsForm.module.css'
import Button from '@material-ui/core/Button'
import SendSharpIcon from '@material-ui/icons/SendSharp';
import { Typography } from '@material-ui/core';
//import { db } from '../firebase';

export default function CommentForm() {
    // db.collection("Posts").add({
    //     Comments:"testing the comments"
    //         })
    //             .then((docRef) => {
    //                 console.log("Document successfully written: ", docRef.id);
    // })
    //             .catch((error) => {
    //                 console.error("Error adding document: ", error);
    // })
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

