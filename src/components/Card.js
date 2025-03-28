import React from "react";
import styles from "./Cards.module.css"; // Importing CSS module

const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>Card 1</div>
      <div className={styles.card}>Card 2</div>
      <div className={styles.card}>Card 3</div>
      <div className={styles.card}>Card 4</div>
      <div className={styles.card}>Card 5</div>
      <div className={styles.card}>Card 6</div>
    </div>
  );
};

export default Cards;
