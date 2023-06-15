import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledMessageWrapper = styled.div`
  ${tw`flex items-end gap-1`}
`;

export const StyledImageProfile = styled(Image)`
  ${tw`w-[40px] h-[40px] rounded-[100%]`}
`;

export const StyledSenderMassageWrapper = styled.div`
  ${tw`min-w-[50px] max-w-[600px] bg-primary text-smokeWhite p-4 flex gap-1.5 relative rounded-[10px]`}
`;

export const StyledSenderMassage = styled.div`
  ${tw``}
`;

export const StyledTimeMessage = styled.div`
  ${tw`text-sm text-gray-500`}
`;

export const StyledStatus = styled.i`
  ${tw`text-green-600 absolute bottom-0 right-[2px]`}
`;
