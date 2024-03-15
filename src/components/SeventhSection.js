import React from 'react';
import styles from './SeventhSection.module.css';

function SeventhSection() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.wrapper}>
                    <p className={styles.heading}>Our  <span className={styles.lightBlueText}>HR Tech Stack's <br /> strengt </span> is fortified by <br /> customers Across All <br />Industries</p>
                </div>
                <div className={styles.contentWrapper}>
                    <p className={styles.technology} style={{ backgroundColor: '#85C0EA', border: 'none', color: 'white' }}>  Insurance </p>
                    <p className={styles.technology}>  Technology </p>
                    <p className={styles.technology}>  Manufacturing </p>
                    <p className={styles.technology}>  Healthcare </p>
                    <p className={styles.technology}> Financial Services </p>
                    <img src="/image/right_vector.png" alt="leaves" className={styles.backgroundImageVector} />
                </div>
            </div>
            <img src="/image/center_img.png" alt="comma" className={styles.backgroundCenterVector} />
            <div>
                <p className={styles.lowerText}>Woliba transformed my health routine with seamless<br /> workout tracking, goal alignment, and daily tips. The<br /> integration with workplace insurance premiums adds <br />motivation, and the user-friendly interface eliminates<br /> drawbacks. With constant tracking, I never miss my <br />exercise targets. Woliba is a game-changer, making health<br /> prioritization effortless. Highly recommended.</p>
                <div className={styles.lowerContent}>
                    <div >
                        <p className={styles.names}>Jason Chavarria</p>
                        <p className={styles.roles}>Senior Accountant Executive</p>
                    </div>
                    <img src="/image/Vertical.png" alt="vector" className={styles.line_Image} />
                    <img src="/image/Logo.png" alt="Logo" className={styles.logo} />
                </div>
                <div>
                    <img src="/image/rating.png" alt="Logo" className={styles.icons} />
                    <img src="/image/Ellipse1.png" alt="Logo" className={styles.icons} />
                    <img src="/image/Ellipse2.png" alt="Logo" className={styles.icons} />
                    <img src="/image/Ellipse3.png" alt="Logo" className={styles.icons} />
                    <img src="/image/Ellipse4.png" alt="Logo" className={styles.icons} />
                </div>
            </div>
        </div>
    );
}

export default SeventhSection;
