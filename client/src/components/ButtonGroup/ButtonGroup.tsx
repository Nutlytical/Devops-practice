import React from "react";

import styles from "./ButtonGroup.module.css";

interface Props {
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function ButtonGroup({ handleClick }: Props) {
  return (
    <div className={styles.button_group}>
      <button className={styles.button} onClick={handleClick} name="male">
        male
      </button>
      <button className={styles.button} onClick={handleClick} name="female">
        female
      </button>
      <button className={styles.button} onClick={handleClick} name="all">
        all
      </button>
    </div>
  );
}
