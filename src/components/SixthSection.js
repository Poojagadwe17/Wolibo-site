import React from 'react'
import styles from './SixthSection.module.css';
import ChallengeDashboardCard from './ChallengeDashboardCard';

function SixthSection() {
  return (
    <div className={styles.pageContent}>
      <p className={styles.blueText}>Real Time Insights On Wellness Challenges Participation </p>
      <p className={styles.normalText}>Launch your challenge and we’ll deliver robust people analytics for maximum ROI.</p>
      <img src="/image/line.png" alt="line" className={styles.line_Image} />

      <ChallengeDashboardCard />

    </div>
  )
}

export default SixthSection