import React from "react";
import {
  StyledImageWrappers,
  StyledUserCard,
  StyledUserInfoWrapper,
  StyledUserName,
  StyledUserEmail,
  StyledOnlineUserStatus,
  StyledOfflineUserStatus,
  Images,
} from "./StyledUserCard";
import { UserCardTypes } from "./TypesUserCard";

const UserCard = ({
  ImageAlt = "",
  ImageSrc,
  UserName,
  UserEmail,
  isOnline,
}: UserCardTypes) => {
  return (
    <StyledUserCard>
      <StyledImageWrappers>
        <Images alt={ImageAlt} src={ImageSrc} width={35} height={35} />
        {isOnline ? (
          <StyledOnlineUserStatus></StyledOnlineUserStatus>
        ) : (
          <StyledOfflineUserStatus></StyledOfflineUserStatus>
        )}
      </StyledImageWrappers>
      <StyledUserInfoWrapper>
        <StyledUserName>{UserName}</StyledUserName>
        <StyledUserEmail>{UserEmail}</StyledUserEmail>
      </StyledUserInfoWrapper>
    </StyledUserCard>
  );
};

export default UserCard;
