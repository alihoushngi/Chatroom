import Input from "@base/Input/Input";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledSideBar = styled.aside`
  ${tw`w-full flex-[1  1  0%]`}
`;

export const StyledProfileInfo = styled.section`
  ${tw`flex flex-col justify-center items-center p-8`}
`;

export const ImageProfile = styled(Image)`
  ${tw`rounded-[100%] w-20 h-20 mb-3`}
`;

export const StyledProfileName = styled.h4`
  ${tw`text-smokeWhite text-2xl mb-1`}
`;

export const StyledProfileEmail = styled.span`
  ${tw`text-gray-500 text-sm`}
`;

export const StyledSearchBox = styled.section`
  ${tw`flex justify-between border-t-[1px] border-b-[1px]  border-gray-700  items-center`}
`;

export const StyledInputSearchBox = styled(Input)`
  border: none !important;
  margin: 0 !important;
  border-radius: unset !important;
  padding: 0 !important;
  position: relative !important;
  font-size: 15px !important;
  width: 100px !important;
`;

export const StyledUsersInfo = styled.div`
  ${tw`flex flex-nowrap gap-1 items-center p-3.5 `}
`;

export const StyledUserInfoTitle = styled.h4`
  ${tw`whitespace-nowrap text-smokeWhite font-normal `}
`;

export const StyledUserInfoNumber = styled.span`
  ${tw`text-md text-gray-500`}
`;

export const StyledSearchWrapper = styled.div`
  ${tw``}
`;
