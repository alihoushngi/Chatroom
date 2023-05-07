import React, { useEffect, useState } from "react";
import { StyledSideBar } from "./StyledSideBar";
import UserCard from "@base/UserCard/UserCard";
import Avatar from "@images/user.png";

//types
interface userState {
  name: string;
  age: number;
  phoneNumber: string;
  gender: string;
  city: string;
  status: boolean;
}

const SideBar = () => {
  const [users, setUsers] = useState<userState[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/users.json");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <StyledSideBar>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <UserCard
              ImageAlt="avatar"
              ImageSrc={Avatar}
              ImageWidth={35}
              ImageHeight={35}
              UserName={user.name}
              UserNumber={user.phoneNumber}
              isOnline={user.status}
            />
          </div>
        );
      })}
    </StyledSideBar>
  );
};

export default SideBar;
