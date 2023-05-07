import React from "react";
import {
  StyledImageWrappers,
  StyledUserCard,
  StyledUserInfoWrapper,
  StyledUserName,
  StyledUserNumber,
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
  UserNumber,
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
        <StyledUserNumber>{UserNumber}</StyledUserNumber>
      </StyledUserInfoWrapper>
    </StyledUserCard>
  );
};

export default UserCard;
