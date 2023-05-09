import React from "react";
import Avatar from "@images/user.png";
import ali from "@images/avatar.jpeg";

import {
  StyledImageProfile,
  StyledMessageWrapper,
  StyledSenderMassage,
  StyledSenderMassageWrapper,
  StyledTimeMessage,
  StyledStatus,
} from "./StyledSenderMessage";

interface IProps {
  text: string;
  profile?: any;
  alt?: string;
  sendTime: string;
  read: boolean;
  sender: boolean;
}

const SenderMessage = ({
  text,
  profile,
  alt,
  sendTime,
  read,
  sender,
}: IProps) => {
  return (
    <StyledMessageWrapper className={sender ? "sender" : "receiver"}>
      <StyledImageProfile
        src={profile ? profile : Avatar && sender ? ali : Avatar}
        alt={alt ? alt : "Profile Image"}
      />
      <StyledSenderMassageWrapper
        style={
          sender
            ? {
                backgroundColor: "#ffffff",
                color: "#15202b",
                flexDirection: "row-reverse",
              }
            : {}
        }>
        <StyledSenderMassage>{text}</StyledSenderMassage>
        <StyledTimeMessage>{sendTime}</StyledTimeMessage>
        {read ? (
          <StyledStatus
            className={`fa fa-check-double ${sender && "left"}`}></StyledStatus>
        ) : (
          <StyledStatus
            className={`fa fa-check ${sender && "left"}`}></StyledStatus>
        )}
      </StyledSenderMassageWrapper>
    </StyledMessageWrapper>
  );
};

export default SenderMessage;
