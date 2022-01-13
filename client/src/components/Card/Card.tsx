import React from "react";

import styles from "./Card.module.css";
import { UserType } from "../../types";

interface Props {
  user: UserType;
  setSelectedUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
}

export default function Card({ user, setSelectedUser }: Props) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div>
          <b>Age</b> : {user.dob.age}
        </div>
        <span
          className={styles.card__close}
          onClick={() => setSelectedUser(undefined)}
        >
          X
        </span>
      </div>
      <div>
        <b>Phone</b> : {user.cell}
      </div>
      <div>
        <b>Address</b> : {user.location.country}, {user.location.city}
      </div>
      <div>
        <b>Email</b> : {user.email}
      </div>
    </div>
  );
}
