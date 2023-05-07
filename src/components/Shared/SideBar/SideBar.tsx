import React, { useEffect, useState } from "react";
import {
  ImageProfile,
  StyledProfileInfo,
  StyledProfileName,
  StyledProfileEmail,
  StyledSearchBox,
  StyledSearchWrapper,
  StyledSideBar,
  StyledUserInfoNumber,
  StyledUserInfoTitle,
  StyledUsersInfo,
  StyledInputSearchBox,
} from "./StyledSideBar";
import UserCard from "@base/UserCard/UserCard";
import Avatar from "@images/user.png";
import profileAvatar from "@images/avatar.jpeg";

//types
interface userState {
  name: string;
  age: number;
  userEmail: string;
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
      <StyledProfileInfo>
        <ImageProfile
          alt="profile"
          src={profileAvatar}
          width={80}
          height={80}
        />
        <StyledProfileName>Ali Houshangi</StyledProfileName>
        <StyledProfileEmail>Blumy.info@gmail.com</StyledProfileEmail>
      </StyledProfileInfo>
      <StyledSearchBox>
        <StyledUsersInfo>
          <StyledUserInfoTitle>My Contact</StyledUserInfoTitle>
          <StyledUserInfoNumber>({users.length})</StyledUserInfoNumber>
        </StyledUsersInfo>
        <StyledSearchWrapper>
          <StyledInputSearchBox
            onChange={(e) => console.log(e.target.value)}
            value=""
            type="search"
            icon
            IconCode="fas fa-search"
          />
        </StyledSearchWrapper>
      </StyledSearchBox>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <UserCard
              ImageAlt="avatar"
              ImageSrc={Avatar}
              ImageWidth={35}
              ImageHeight={35}
              UserName={user.name}
              UserEmail={user.userEmail}
              isOnline={user.status}
            />
          </div>
        );
      })}
    </StyledSideBar>
  );
};

export default SideBar;
