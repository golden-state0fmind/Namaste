import Link from 'next/link';
import { useContext } from 'react';
import styles from '../../styles/Home.module.css';
import { useAuth } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeContext';

export default function NavBar() {
    const { menuOpen, setMenuOpen } = useContext(ThemeContext);
    const { user, logout } = useAuth();
    const alertUser = () => {
        return (
            <div class="alert alert-danger" role="alert">
                {alert(`${user.email} has successfully logged out!`)}
            </div>
        )
    }
    return (
        <>
            <section className={styles.top_nav}>
                <div className={styles.logo}>
                    {user ? `Welcome ${user.email}` : 'Recipes, blogs, and more inside'}
                </div>
                <input onClick={() => setMenuOpen(!menuOpen)} id={styles.menu_toggle} type="checkbox" />
                <label className={styles.menu_button_container} htmlFor={styles.menu_toggle}>
                    <div className={styles.menu_button}></div>
                </label>
                {user ? (
                    <ul className={styles.menu}>
                        <li >
                            <Link href="/">
                                HOME
                            </Link>
                        </li>
                        <li >
                            <Link href="/comments">
                                COMMENTS
                            </Link>
                        </li>
                        <li >
                            <Link href="/meals">
                                MEALS
                            </Link>
                        </li>
                        <li >
                            <Link href="/motivation">
                                MOTIVATION
                            </Link>
                        </li>
                        <li
                            style={{ color: '#ffb09c', cursor: 'pointer' }}
                            onClick={logout}>
                            LOGOUT
                        </li>
                    </ul>
                ) : (
                        <ul className={styles.menu}>
                            <li >
                                <Link href="/">
                                    HOME
                                </Link>
                            </li>
                            <li >
                                <Link href="/signup">
                                    SIGN UP
                                </Link>
                            </li>
                            <li >
                                <Link href="/signin">
                                    SIGN IN
                                </Link>
                            </li>
                        </ul>
                    )}
            </section>
        </>
    );
};