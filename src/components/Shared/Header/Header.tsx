import React from "react";
import {
  StyledHeader,
  StyledProfile,
  StyledLogoWrapper,
  StyledInfoWrapper,
  StyledNameTag,
  StyledTagline,
} from "./StyledHeader";
import Image from "next/image";
import avatar from "@images/avatar.jpeg";
import logo from "@images/Logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <StyledProfile>
        <Image alt="avatar" src={avatar} />
        <StyledInfoWrapper>
          <StyledNameTag>Ali Houshangi</StyledNameTag>
          <StyledTagline>Frontend Developer | NextJS</StyledTagline>
        </StyledInfoWrapper>
      </StyledProfile>
      <StyledLogoWrapper>
        <Image alt="logo" src={logo} />
      </StyledLogoWrapper>
    </StyledHeader>
  );
};

export default Header;
