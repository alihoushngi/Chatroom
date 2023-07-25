import tw from "twin.macro";
import styled from "styled-components";

export const StyledHeader = styled.header`
  ${tw` flex h-fit min-h-[60px] justify-between p-2 items-center`}
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const StyledProfile = styled.div`
  ${tw`flex justify-center items-center gap-4`}
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`;

export const StyledInfoWrapper = styled.div`
  ${tw`text-smokeWhite`}
`;

export const StyledNameTag = styled.h4`
  ${tw`text-[12px]`}
`;

export const StyledTagline = styled.span`
  ${tw`text-[10px] text-gray-400`}
`;

export const StyledLogoWrapper = styled.div`
  ${tw``}
  img {
    width: 40px;
  }
`;
