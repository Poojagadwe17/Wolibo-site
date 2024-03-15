import React from 'react';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
    return (
        <div className={styles.navigationBar}>
            <div className={styles.logo}>
                <img src="/image/Logo.png" alt="Company Logo" />
            </div>
            <div className={styles.navigationOptions}>
                <ul>
                    <li>Products <img src="/image/Bottom_arrow.png" alt="Bottom Icon" /></li>
                    <li className={styles.text}>Solution <img src="/image/Bottom_arrow.png" alt="Bottom Icon" /></li>
                    <li className={styles.text}>Resources</li>
                    <li className={styles.text}>About</li>
                </ul>
            </div>
            <div className={styles.buttons}>
                <button className={styles.signInButton}>Sign In</button>
                <button className={styles.bookCallButton}>Book a Call</button>
            </div>
        </div>
    );
};

export default NavigationBar;
