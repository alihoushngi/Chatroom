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
import Image from "next/image";

const UserCard = ({
  ImageAlt,
  ImageSrc,
  ImageWidth,
  ImageHeight,
  UserName,
  UserEmail,
  isOnline = undefined,
}: UserCardTypes) => {
  return (
    <StyledUserCard>
      <StyledImageWrappers>
        <Images
          alt={ImageAlt}
          src={ImageSrc}
          width={ImageWidth}
          height={ImageHeight}
        />
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
