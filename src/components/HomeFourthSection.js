import React from 'react';
import styles from './HomeFourthSection.module.css';

function HomeFourthSection() {
    return (
        <>
            <div className={styles.pageContent}>
                <img src="/image/right_vector.png" alt="leaves" className={styles.backgroundImageVector} />
                <h2 className={styles.blueText}>Woliba: Embracing Total employee wellbeing</h2>
                <p className={styles.normalText}>Woliba's challenges drive workplace engagement, foster camaraderie, and promote team unity while enhancing performance, preventing burnout, and saving costs through a proactive healthcare approach.</p>
                <img src="/image/line.png" alt="line" className={styles.line_Image} />

                <img src="/image/USER.png" alt="leaves" className={styles.backgroundImage} />
                <div className={styles.bottomContainer}>
                    <div className={styles.innerContent}>
                        <img src="/image/Logo12.png" alt="Logo 12" className={styles.logo} />
                        <div>
                            <p className={styles.bottomSub}>Inspiring Initiatives </p>
                            <p className={styles.description} >Woliba encourages users to self-initiate<br /> challenges, reducing admin <br />dependency, fostering individual<br /> accountability, and accumulating points<br /> based on performance.</p>
                        </div>
                    </div>
                    <div className={styles.innerContent}>
                        <img src="/image/Logo13.png" alt="Logo 13" className={styles.logo} />
                        <div>
                            <p className={styles.bottomSub}>AI-Personalized Challenges</p>
                            <p className={styles.description}>We harness the power of AI to suggest<br /> tailored challenges based on individual<br /> goals and interests, fostering a more <br />personalized and engaging wellness<br /> experience.</p>
                        </div>
                    </div>
                    <div className={styles.innerContent}>
                        <img src="/image/Logo14.png" alt="Logo 14" className={styles.logo} />
                        <div>
                            <p className={styles.bottomSub}>Building Team Cohesion </p>
                            <p className={styles.description}>Strengthen team connections by <br />uniting colleagues in pursuit of a shared<br /> wellness goal, fostering a sense of<br /> camaraderie and mutual support.</p>
                        </div>

                    </div>



                </div>

                <img src="/image/ADMIN.png" alt="leaves" className={styles.backgroundImageAdmin} />
                <div className={styles.bottomContainer}>
                    <div className={styles.innerContent}>
                        <img src="/image/Logo15.png" alt="Logo 15" className={styles.logo} />
                        <div>
                            <p className={styles.bottomSub}>Proactive Healthcare Focus</p>
                            <p className={styles.description}>Prioritizes a proactive healthcare<br /> approach for cost savings and overall <br />well-being benefits, preventing health<br /> issues from escalating and ensuring a<br /> healthier workforce.</p>
                        </div>
                    </div>
                    <div className={styles.innerContent}>
                        <img src="/image/Logo16.png" alt="Logo 16" className={styles.logo} />
                        <div>
                            <p className={styles.bottomSub}>Efficiency through Automation</p>
                            <p className={styles.description}>Boosts program management efficiency<br /> through the integration of automation,<br /> real-time analytics, and data-driven<br /> dashboards, leading to significant time <br />savings.</p>
                        </div>
                    </div>
                    <div className={styles.innerContent}>
                        <img src="/image/Logo17.png" alt="Logo 17" className={styles.logo} />
                        <div>
                            <p className={styles.bottomSub}>Diverse Monthly Themes</p>
                            <p className={styles.description}>Recommends challenges that align with<br /> monthly themes, emphasizing <br />inclusivity and diversity, and promoting<br /> a well-rounded and culturally aware<br /> wellness program.</p>
                        </div>

                    </div>



                </div>
            </div>

            <div className={styles.bottomContent}>

                <div className={styles.headingContainer}>
                    <p>Are you ready to create a culture of <br />wellbeing?</p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.roundButton}>LET'S GET STARTED </button>
                </div>
            </div>
        </>

    );
}

export default HomeFourthSection;
