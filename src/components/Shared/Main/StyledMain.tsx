import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledMain = styled.aside`
  ${tw` w-full flex-[4  1  0%] bg-[#171717] border-l border-gray-700`}
`;

export const StyledFirstSection = styled.div`
  ${tw`m-5 pb-4 border-b-[1px] border-gray-700 flex justify-between items-center`}
`;

export const StyledImageWrappers = styled.div`
  ${tw`flex relative`}
`;

export const Images = styled(Image)`
  ${tw``}
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

export const StyledMainSection = styled.div`
  height: 75%;
`;

export const StyledInputWrapper = styled.section`
  ${tw`w-full p-5 flex justify-between border-t-[1px] border-gray-700`}
`;

export const StyledInput = styled.input`
  ${tw`bg-transparent text-[12px] w-96 text-smokeWhite h-3.5`}
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
