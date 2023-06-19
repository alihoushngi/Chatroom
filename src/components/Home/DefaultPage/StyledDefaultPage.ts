import styled from "styled-components";
import tw from "twin.macro";

export const DefaultPageWrapperStyle = styled.div`
  ${tw`h-[100vh] flex justify-center text-smokeWhite flex-col p-[200px]`}
`;

export const DefaultPageTitleStyle = styled.h1`
  ${tw`text-4xl text-center mb-5`}
`;

export const DefaultPageDesStyle = styled.p`
  ${tw`text-justify`}
`;
