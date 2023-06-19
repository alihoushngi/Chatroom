import React, { useEffect, useState } from "react";
import avatar from "../../../../public/static/images/user.png";

import {
  Images,
  StyledImageWrappers,
  StyledOfflineUserStatus,
  StyledOnlineUserStatus,
  StyledInfoWrapper,
  StyledFirstSection,
  StyledIconsWrapper,
  StyledInputWrapper,
  StyledInput,
  StyledButton,
  StyledMainSection,
  StyledMessagesWrapper,
} from "./StyledMohammadPage";

import {
  StyledUserEmail,
  StyledUserInfoWrapper,
  StyledUserName,
} from "@base/UserCard/StyledUserCard";
import MessageBox from "@base/MessageBox/MessageBox";

//types
interface userState {
  name: string;
  age: number;
  userEmail: string;
  gender: string;
  city: string;
  status: boolean;
  avatar: string;
}

interface userChats {
  sender: boolean;
  text: string;
  sendTime: string;
  read: boolean;
  avatar?: string;
}

const MohammadPage = () => {
  const [users, setUsers] = useState<userState[]>([]);
  const [mohammadChats, setMohammadChats] = useState<userChats[]>([]);
  const [sortedChats, setSortedChats] = useState<userChats[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/users.json");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
    async function fetchChats() {
      const response = await fetch("/mohammadChat.json");
      const data = await response.json();
      setMohammadChats(data);

      const sortedChats = data
        .slice()
        .sort(
          (a: userChats, b: userChats) =>
            new Date(a.sendTime).getTime() - new Date(b.sendTime).getTime()
        );
      setSortedChats(sortedChats);
    }
    fetchChats();
  }, []);

  const isOnline = users[1]?.status;
  return (
    <>
      <StyledFirstSection>
        <StyledInfoWrapper>
          <StyledImageWrappers>
            <Images
              alt="userAvatar"
              src={users[1] ? users[1]?.avatar : avatar}
              width={50}
              height={50}
            />
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
      <StyledMainSection>
        <StyledMessagesWrapper>
          {sortedChats.map((data, index) => {
            return (
              <MessageBox
                key={index}
                profile={data.avatar}
                sender={data.sender}
                text={data.text}
                sendTime={data.sendTime}
                read={data.read}
              />
            );
          })}
        </StyledMessagesWrapper>
      </StyledMainSection>
      <StyledInputWrapper>
        <StyledInput type="text" placeholder="Type your message here..." />
        <StyledButton>SEND</StyledButton>
      </StyledInputWrapper>
    </>
  );
};

export default MohammadPage;
