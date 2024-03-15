import React from 'react';
import styles from './HomeSecondSection.module.css';
import ExpandComponent from './ExpandComponent';

function HomeSecondSection() {
    return (
        <div className={styles.pageContent}>
            <h2 className={styles.blueText}>Cultivate a Workforce That Is  <span className={styles.lightBlueText}>Healthy </span> </h2>
            <p className={styles.normalText}>Boost Your Team's Spirit and Build Healthier Habits with Woliba's Activity & Wellness Challenges.</p>
            <img src="/image/line.png" alt="line" className={styles.line_Image} />
            <div className={styles.division}>
                <div className={styles.leftContent}>
                    <div className={styles.leftHeading}>
                        <img src="/image/peer_recognition.png" alt="Icon" className={styles.icon} />
                        <p className={styles.leftSideText}> Holistic & Inclusive challenges</p>
                    </div>
                    <div>
                        <p className={styles.subheading}>Offer an inclusive wellness benefit that supports all pillars<br></br> of wellbeing and motivates people to bring their best selves<br></br> to work.</p>
                    </div>
                    <div>
                        <ExpandComponent heading="Habit Formation " expandText="Build lasting habits with engaging and diverse wellness challenges." />
                        <img src="/image/Hori_Line.png" alt="Icon" />
                        <ExpandComponent heading="Holistic Wellbeing " expandText="Embrace a holistic approach covering all aspects of wellbeing, including mental, nutritional, lifestyle and emotional health." />
                        <img src="/image/Hori_Line.png" alt="Icon" />
                        <ExpandComponent heading="Promoting Diversity " expandText="" />

                    </div>

                </div>

                <div className={styles.rightContenet}>
                    <img src="/image/Frame2.png" alt="Icon" className={styles.rightContenti} />

                </div>

            </div>





        </div>
    );
}

export default HomeSecondSection;
