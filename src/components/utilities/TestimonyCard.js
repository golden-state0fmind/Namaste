import React from 'react';
//import Image from 'next/image';
//import Buddha from '../../assets/Buddha.png'
import styles from '../../styles/TestimonyCard.module.css';

export default function Testimonycard() {
    const myLoader = ({ src, width, quality }) => {
        return `../../assets/Buddha.png/${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <div className={styles.testimony_card} >
            <h4>username</h4>
            {/* <div>
                <Image
                    src={Buddha}
                    alt="Picture of the buddha"
                    width="200px"
                    height="200px"
                    placeholder="blur" // placeholder="empty" 
                />
            </div> */}
            <p>A few words about thier change</p>
        </div>
    );
}