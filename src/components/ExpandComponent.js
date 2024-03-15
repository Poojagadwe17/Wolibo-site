import React, { useState } from 'react';
import styles from './ExpandComponent.module.css';

function ExpandComponent(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className={styles.content}>
        <h3 className={isExpanded ? `${styles.heading} ${styles.headingExpanded}` : styles.heading}>{props.heading}</h3>
        <button className={styles.expand_button} onClick={toggleExpand}>
          {isExpanded ? <img src='/image/expand.png' alt="Expand" /> : <img src='/image/collapse.png' alt="Collapse" />}
        </button>
      </div>
      {isExpanded && (
        <div className={styles.blueText}>
          {props.expandText}
        </div>
      )}
    </div>
  );
}

export default ExpandComponent;
