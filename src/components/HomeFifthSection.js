import React from 'react';
import styles from './HomeFifthSection.module.css';

function HomeFifthSection() {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src="/image/Circle.png" alt="Circle" className={styles.leftImage} />
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.headingContainer}>
                    <p className={styles.bottomHeading}>Easily Connect Your<br /> Wearable Device</p>
                    <h6>At Woliba, our challenges go beyond simply <br></br>counting steps. We curate comprehensive and<br></br> meaningful experiences to inspire real behavior<br></br> change.</h6>
                    <img src="/image/line.png" alt="line" className={styles.image} />
                </div>
                <img src="/image/right_vector.png" alt="leaves" className={styles.backgroundImageVector} />
            </div>
        </div>
    );
}

export default HomeFifthSection;
