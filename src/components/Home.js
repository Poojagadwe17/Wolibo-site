// Home.js
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import styles from './Home.module.css';
const Home = () => {
    return (
        <>
            <NavigationBar />
            <div className={styles.pageContent}>

                <div className={styles.leftContent}>
                    <pre className={styles.blueText}>
                        <span className={styles.lightBlueText}>Wellness Challenges </span>
                        {`For
                      A personalized journey 
                      To wellbeing `} </pre>
                    <p className={styles.normalText}> Your tailored solution to promote healthy behaviors across all<br></br>
                        dimensions of wellbeing.
                    </p>
                    <img src="/image/line.png" alt="line" className={styles.image} />
                    <div className={styles.buttonRow}>
                        <button className={styles.roundedButton}>  <img src="/image/play.svg" alt="Play Icon" className={styles.playIcon} />
                            Watch Video</button>
                        <button className={styles.roundedButtonDemo}>Request a Demo</button>
                    </div>
                </div>

                <div className={styles.rightSide}>
                    <div>
                        <img src="/image/Home1.png" alt="Icon" className={styles.size} />
                    </div>
                    <div>
                        <img src="/image/Home2.png" alt="Icon" className={styles.size} />
                    </div>
                </div>



            </div>
            <div className={styles.bottomContent}>
                <p className={styles.bottomText}>Trusted for a Healthier Workforce by Leading Companies</p>
                <div className={styles.logoContainer}>
                    <img src="/image/Logo1.png" alt="Logo 1" className={styles.logo} />
                    <img src="/image/Logo2.png" alt="Logo 2" className={styles.logo} />
                    <img src="/image/Logo3.png" alt="Logo 3" className={styles.logo} />
                    <img src="/image/Logo4.png" alt="Logo 4" className={styles.logo} />
                    <img src="/image/Logo5.png" alt="Logo 5" className={styles.logo} />
                    <img src="/image/Logo6.png" alt="Logo 6" className={styles.logo} />
                    <img src="/image/Logo7.png" alt="Logo 7" className={styles.logo} />
                </div>
            </div>

        </>
    );
};

export default Home;
