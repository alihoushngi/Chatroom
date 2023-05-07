import React, { useEffect, useState } from "react";
import Avatar from "@images/user.png";
import {
  Images,
  StyledImageWrappers,
  StyledMain,
  StyledOfflineUserStatus,
  StyledOnlineUserStatus,
  StyledInfoWrapper,
  StyledFirstSection,
  StyledIconsWrapper,
  StyledInputWrapper,
  StyledInput,
  StyledButton,
  StyledMainSection,
} from "./StyledMain";
import {
  StyledUserEmail,
  StyledUserInfoWrapper,
  StyledUserName,
} from "@base/UserCard/StyledUserCard";

//types
interface userState {
  name: string;
  age: number;
  userEmail: string;
  gender: string;
  city: string;
  status: boolean;
}

const Main = () => {
  const [users, setUsers] = useState<userState[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/users.json");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const isOnline = users[1]?.status;

  return (
    <StyledMain>
      <StyledFirstSection>
        <StyledInfoWrapper>
          <StyledImageWrappers>
            <Images alt="userAvatar" src={Avatar} width={50} height={50} />
            {isOnline ? (
              <StyledOnlineUserStatus></StyledOnlineUserStatus>
            ) : (
              <StyledOfflineUserStatus></StyledOfflineUserStatus>
            )}
          </StyledImageWrappers>
          <StyledUserInfoWrapper>
            <StyledUserName>{users[1]?.name}</StyledUserName>
            <StyledUserEmail>{users[1]?.userEmail}</StyledUserEmail>
          </StyledUserInfoWrapper>
        </StyledInfoWrapper>
        <StyledIconsWrapper>
          <i className="fa-regular fa-phone"></i>
          <i className="fa-regular fa-video"></i>
          <i className="fas fa-ellipsis-v"></i>
        </StyledIconsWrapper>
      </StyledFirstSection>
      <StyledMainSection></StyledMainSection>
      <StyledInputWrapper>
        <StyledInput type="text" placeholder="Type your message here..." />
        <StyledButton>SEND</StyledButton>
      </StyledInputWrapper>
    </StyledMain>
  );
};

export default Main;
