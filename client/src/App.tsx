import axios from "axios";
import React, { useState, useEffect } from "react";

import "./App.css";
import { ButtonGroup, User } from "./components";
import { UserType } from "./types";

export default function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [gender, setGender] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${gender}`).then((response) => {
      setUsers((prev) => [...prev, ...response.data]);
      setIsLoading(false);
    });
  }, [isLoading]);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY > document.body.offsetHeight &&
        !isLoading
      ) {
        setIsLoading(true);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    if (target.name !== "all") {
      setGender(target.name);
    } else {
      setGender("");
    }
  };

  return (
    <>
      <header>
        <h1>In a galaxy far far away</h1>
        <p>Start editing to see some magic happen!</p>
      </header>

      <ButtonGroup handleClick={handleClick} />

      {!gender &&
        users.map((user: UserType, index: number) => (
          <User key={index} user={user} />
        ))}

      {gender &&
        users
          .filter((user) => user.gender === gender)
          .map((user: UserType, index: number) => (
            <User key={index} user={user} />
          ))}
    </>
  );
}
