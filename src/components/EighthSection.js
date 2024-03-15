import React from 'react'
import styles from './EighthSection.module.css';


function EighthSection() {
    return (
        <>
            <div className={styles.pageContent}>

                <div>
                    <p className={styles.blueText}>More Reasons To Choose Woliba </p>
                    <p className={styles.normalText}>
                        HR teams leverage Woliba Employee Recognition alongside Challenges, Resources, Surveys, Events, and Reward Management to <br />comprehensively engage employees and foster a world-class organizational culture.</p>
                    <img src="/image/line.png" alt="line" className={styles.line_Image} />
                </div>
                <div className={styles.background}>
                    <div >
                        <img src="/image/reasons.png" alt="line" />
                    </div >

                    <img src="/image/Logo.png" alt="line" className={styles.logo1} />
                </div>
                <img src="/image/right_vector.png" alt="leaves" className={styles.backgroundImageVector} />
                <img src="/image/quality.png" alt="line" className={styles.quality_logo} />

            </div>

            <div className={styles.bottomContainer}>
                <div className={styles.bottomContent}>

                    <div className={styles.headingContainer}>
                        <p className={styles.bottomHeading}>Company</p>
                        <div className={styles.text}>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Why Us</p>
                            <p>Pricing</p>
                            <p>Demo</p>
                            <p>Sign In</p>
                        </div>
                    </div>

                    <div className={styles.headingContainer}>
                        <p className={styles.bottomHeading}>Products</p>
                        <div className={styles.text}>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Why Us</p>
                            <p>Pricing</p>
                            <p>Demo</p>
                            <p>Sign In</p>
                        </div>
                    </div>
                    <div className={styles.headingContainer}>
                        <p className={styles.bottomHeading}>Resources</p>
                        <div className={styles.text}>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Why Us</p>
                            <p>Pricing</p>
                            <p>Demo</p>
                            <p>Sign In</p>
                        </div>
                    </div>
                    <div className={styles.headingContainer}>
                        <p className={styles.bottomHeading}>Support</p>
                        <div className={styles.text}>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Why Us</p>
                            <p>Pricing</p>
                            <p>Demo</p>
                            <p>Sign In</p>
                        </div>
                    </div>
                    <div className={styles.logoContainer}>
                        <div>
                            <img src="/image/Footer_Logo.png" alt="Logo 8" className={styles.logoImage} />

                        </div>
                        <div className={styles.lowerContent}>
                            <div >
                                <p className={styles.cont_heading}>Contact US</p>
                                <p className={styles.address}>Sales@woliba.io</p>
                            </div>
                        </div>
                    </div>


                </div>
                <p className={styles.termsText}>© 2020 Training Amigo Inc. All Rights Reserved</p>
            </div>
        </>
    )
}

export default EighthSection;