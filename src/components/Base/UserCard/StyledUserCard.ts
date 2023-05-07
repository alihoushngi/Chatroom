import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledUserCard = styled.div`
  ${tw`border-b-[1px] border-solid border-gray-700 p-5 flex items-center gap-2.5 hover:bg-gray-800 transition-all`}
`;

export const StyledImageWrappers = styled.div`
  ${tw`relative`}
`;

export const Images = styled(Image)`
  ${tw``}
`;

export const StyledOnlineUserStatus = styled.div`
  ${tw`absolute w-2 h-2 rounded-[100%] right-0 bottom-[1px] bg-green-300`}
`;

export const StyledOfflineUserStatus = styled.div`
  ${tw`absolute w-2 h-2 rounded-[100%] right-0 bottom-[1px] bg-red-600`}
`;

export const StyledUserInfoWrapper = styled.div`
  ${tw`flex-col`}
`;

export const StyledUserName = styled.div`
  ${tw`text-[12px] text-smokeWhite`}
`;

export const StyledUserEmail = styled.span`
  ${tw`text-[10px] text-gray-400`}
`;
