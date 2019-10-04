import React from 'react'
import styles from './card.module.scss'

const Cart = ({ title, text, ribbonColor, cardIcon, cardState }) => {
  
  let ribbonStyle = {
    background: ribbonColor
  };

  return (<div className={styles.card} >
    <div className={styles.cardRibbon} style={ribbonStyle}></div>
    
    <div className={styles.cardContent}>
      <div className={styles.cardState}>
        <img className={styles.cardIcon} src={cardIcon} alt="" />
        {cardState}
      </div>

      <h2 className={styles.cardTitle}>{ title }</h2>
      <p className={styles.cardText}>{ text }</p>
    </div>
  </div>)
};

export default Cart