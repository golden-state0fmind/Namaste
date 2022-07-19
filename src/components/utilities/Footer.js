import React from 'react';
import styles from '../../styles/Home.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://www.antonioreyes.dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                Made with ❤️ by Antonio Reyes
                <img src="" alt="" className={styles} />
            </a>
        </footer>
    );
};