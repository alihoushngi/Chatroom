import styled from "styled-components";
import tw from "twin.macro";

export const StyledInputWrapper = styled.div`
	${tw`flex flex-col relative grow-[1] pb-1  shrink-[0] `}
`;
export const StyledTextInput = styled.input`
	${tw`border-[1px] focus:border-secondary shadow-none border-secondary rounded-[3px] focus-visible:outline-none  p-2 mt-0.5 box-border text-sm bg-transparent  text-secondary`}
`;
export const StyledInputError = styled.span`
	${tw`absolute -bottom-3 right-1 text-[11px] text-error`}
`;
