import React from 'react';
import styles from './HomeThirdSection.module.css';
import ExpandComponent from './ExpandComponent';

function HomeThirdSection() {


    return (
        <>
            <div className={styles.pageContent}>
                <div className={styles.division}>
                    <div className={styles.leftContent}>
                        <img src="/image/Frame3.png" alt="Icon" className={styles.leftContenti} />

                    </div>

                    <div className={styles.rightContent}>
                        <div className={styles.rightHeading}>
                            <img src="/image/peer_recognition2.png" alt="Icon" className={styles.icon} />
                            <p className={styles.rightSideText}> Dynamic activity challenges</p>
                        </div>
                        <div>
                            <p className={styles.rightSubheading}>Every Step Counts: Choose from a diverse library of activity <br></br>challenges to launch within minutes.</p>
                        </div>
                        <div>
                            <ExpandComponent heading="Enhancing Performance" expandText="Keep your employees physically engaged to enhance productivity." />
                            <img src="/image/Hori_Line.png" alt="Icon" />
                            <ExpandComponent heading="Gamification" expandText="Connect teams and encourage friendly competition through real-time gamified leaderboards." />
                            <img src="/image/Hori_Line.png" alt="Icon" />
                            <ExpandComponent heading="Incentivization" expandText="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomContent}>

                <div className={styles.headingContainer}>
                    <p className={styles.bottomHeading}>How Woliba Is<br></br> Making A ifference</p>
                    <h6>At Woliba, our challenges go beyond simply <br></br>counting steps. We curate comprehensive and<br></br> meaningful experiences to inspire real behavior<br></br> change.</h6>
                    <img src="/image/line.png" alt="line" className={styles.image} />
                </div>

                <div className={styles.logoContainer}>
                    <div style={{ display: 'flex' }}>
                        <img src="/image/Logo8.png" alt="Logo 8" className={styles.logo} />
                        <p className={styles.bottomSub}>Personalized Fitness Goals</p>

                    </div>
                    <p className={styles.subheading}>Users are able to set tailored goals based on their individual activity levels,<br></br> fostering a more personalized and inclusive approach to fitness.</p>
                    <img src="/image/subline.png" alt="line" className={styles.image2} />
                    <div style={{ display: 'flex' }}>
                        <img src="/image/Logo9.png" alt="Logo 9" className={styles.logo} />
                        <p className={styles.bottomSub}>Engagement through Group Chat</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src="/image/Logo10.png" alt="Logo 10" className={styles.logo} />
                        <p className={styles.bottomSub}>Employee-Centric Customization</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src="/image/Logo11.png" alt="Logo 11" className={styles.logo} />
                        <p className={styles.bottomSub}>Comprehensive Manual Activity Log-in</p>
                    </div>

                </div>
            </div>
        </>

    );
}

export default HomeThirdSection;
