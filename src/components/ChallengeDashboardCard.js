import React from 'react'
import styles from './ChallengeDashboardCard.module.css';

function ChallengeDashboardCard() {
  return (
    <>
      <div className={styles.headingContent}>
        <img src="/image/challengeicon.png" alt="line" className={styles.icon_Image} />
        <p className={styles.subheading}>Challenge Dashboard</p>
      </div>
      <div>
        <div className={styles.cardContainer}>
          <h3 className={styles.cardHeading}>Activity & Wellness Challenges Dashboard</h3>
          <div className={styles.cardBar}>
            <img src="/image/Rectangle1.png" alt="line" className={styles.Reactangle_Image} />
            <img src="/image/overview.png" alt="line" className={styles.bar_Image} />
            <img src="/image/Rectangle2.png" alt="line" className={styles.Reactangle_Image} />
            <img src="/image/Rectangle3.png" alt="line" className={styles.Reactangle_Image} />
            <img src="/image/Frame 1.png" alt="line" className={styles.bar_Image} />
          </div>
          <img src="/image/Cardcontent.png" alt="line" className={styles.bar_Image} />
          <img src="/image/Verticalbar.png" alt="line" className={styles.bar_Image} />
          <div>
            <img src="/image/Group1.png" alt="line" className={styles.bar_Image} />
            <img src="/image/Group2.png" alt="line" className={styles.bar_Image} />
          </div>

        </div>


      </div>
    </>
  )
}

export default ChallengeDashboardCard;