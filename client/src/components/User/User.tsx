import React, { useState } from "react";

import styles from "./User.module.css";
import { UserType } from "../../types";
import Card from "../Card/Card";

interface Props {
  user: UserType;
}

export default function User({ user }: Props) {
  const [selectedUser, setSelectedUser] = useState<UserType>();

  return (
    <div className={styles.users_container}>
      <div className={styles.user_container}>
        <div className={styles.user} onClick={() => setSelectedUser(user)}>
          <img
            className={styles.user__img}
            src={user.picture.thumbnail}
            alt="user-image"
          />
          <div className={styles.user__content}>
            <span>
              {user.name.title}. {user.name.first}
              {user.name.last}
            </span>
            <span>{user.gender}</span>
          </div>
        </div>

        {selectedUser && <Card user={user} setSelectedUser={setSelectedUser} />}
      </div>
    </div>
  );
}
