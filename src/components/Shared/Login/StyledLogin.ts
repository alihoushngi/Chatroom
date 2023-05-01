import styled from "styled-components";
import tw from "twin.macro";

export const StyledLoginWrapper = styled.div`
	${tw`bg-smokeWhite h-[fit-content] flex-col self-center p-5 rounded-2xl `}
`;

export const StyledInputWrapper = styled.div`
	${tw`flex flex-col relative grow-[1] pb-3  shrink-[0] `}
`;

export const StyledForm = styled.form`
	${tw`flex w-full flex-col gap-2 self-stretch`}
`;

export const StyledInputLabel = styled.label`
	${tw` text-black text-sm font-semibold `}
`;

export const StyledSubmitButton = styled.button`
	${tw`w-full bg-secondary p-2 text-center rounded-[6px] text-white text-[12px]`}
`;
