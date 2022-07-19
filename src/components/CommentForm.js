import React, { useEffect, useState } from 'react';
import style from '../styles/CommentsForm.module.css';
import { firestore } from '../firebase';

export default function CommentForm() {
    const [comment, setComment] = useState(''); //state for the comment

    function handleChange(e) {
        setComment(e.target.value);
    };
    console.log(comment)
    //handling the submit for the form and calling firebase to send comment
    function handleSubmit(event) {
        event.preventDefault(); //keeps the form from leaving website
        firestore.collection("Posts").add({
            //firestore adding a new document with comment
            comment: comment
        }).then((docRef) => {
            setComment(""); //clearing the input field
            console.log("Written document: ", docRef.id)
            console.log('hitting the end of the submit function===============', comment);
        }).catch(console.error);
    };


    // useEffect(() => {
    //     handleSubmit();
    // }, []);

    return (
        <form className={style.formContainer} onSubmit={handleSubmit}>
            <label>
                <textarea
                    className={style.textArea}
                    comment='comment'
                    type='text'
                    value={comment}
                    onChange={handleChange}
                />
            </label>
            <button>Submit</button>
        </form>
    );
};

