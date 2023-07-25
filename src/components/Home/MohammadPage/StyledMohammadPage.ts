import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledFirstSection = styled.div`
  ${tw`m-5 pb-4 border-b-[1px] border-gray-700 flex justify-between items-center`}
`;

export const StyledMessagesWrapper = styled.div`
  ${tw`flex flex-col gap-1`}
`;

export const StyledImageWrappers = styled.div`
  ${tw`flex relative`}
`;

export const Images = styled(Image)`
  ${tw`rounded-[100%]`}
`;

export const StyledOnlineUserStatus = styled.div`
  ${tw`absolute w-3 h-3 rounded-[100%] right-0 bottom-[1px] bg-green-300`}
`;

export const StyledOfflineUserStatus = styled.div`
  ${tw`absolute w-3 h-3 rounded-[100%] right-0 bottom-[1px] bg-red-600`}
`;

export const StyledInfoWrapper = styled.div`
  ${tw`flex items-center gap-2`}
`;

export const StyledIconsWrapper = styled.div`
  ${tw`text-gray-500 flex gap-5 text-md`}
`;

export const StyledInputWrapper = styled.div`
  ${tw`border-t-[1px] border-gray-700 flex justify-between py-4 px-2.5 absolute right-0 left-0 bottom-0 bg-[#171717]`}
`;

export const StyledInput = styled.input`
  ${tw`bg-transparent text-[12px]  text-smokeWhite h-3.5 min-w-[300px] w-fit `}
  :focus-visible {
    outline: none !important;
    outline-offset: 0 !important;
    outline-style: unset !important;
    outline-width: 0 !important;
    outline-color: transparent !important;
  }
`;

export const StyledButton = styled.button`
  ${tw`bg-gray-700 text-smokeWhite px-7 py-2 text-center text-sm rounded-[4px] `}
`;

export const StyledMainSection = styled.div`
  ${tw`m-5 pb-4 flex overflow-scroll h-[78vh] w-[95%] flex-col`}
  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0);
  }
`;
