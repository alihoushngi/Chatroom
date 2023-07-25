import styled from "styled-components";
import tw from "twin.macro";

export const StyledWrapperForm = styled.div`
	${tw`bg-smokeWhite h-[fit-content] flex-col self-center p-5 rounded-xl mobile:mt-60 `}
`;

export const StyledRegisterHeader = styled.h1`
	${tw`text-center font-bold mb-4`}
`;

export const StyledMainRegisterWrapper = styled.div`
	${tw`flex items-end mobile:flex-col-reverse mobile:items-center`}
`;

export const StyledLeftSectionWrapper = styled.div`
	${tw`w-96 border-r-2 p-4 flex items-center mobile:border-0 mobile:border-t-2 flex-col`}
`;

export const StyledRightSectionWrapper = styled.div`
	${tw`w-96 p-4 mobile:w-72 flex-col`}
`;

export const StyledImageWrapper = styled.div`
	${tw`flex justify-center`}
`;
