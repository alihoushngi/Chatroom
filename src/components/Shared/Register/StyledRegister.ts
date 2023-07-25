import styled from "styled-components";
import tw from "twin.macro";

export const StyledForm = styled.form`
	${tw`flex w-full flex-col gap-2 self-stretch`}
`;

export const StyledFormWrapper = styled.div`
	${tw`flex w-full  flex-wrap flex-col gap-1 `}
`;

export const StyledInputWrapper = styled.div`
	${tw`flex flex-col relative grow-[1] pb-3  shrink-[0] `}
`;

export const StyledLabel = styled.label`
	${tw` text-black text-sm font-semibold `}
`;

export const StyledButton = styled.button`
	${tw`w-full bg-secondary p-2 text-center rounded-[6px] text-white text-[12px]`}
`;

export const StyledTooltip = styled.span``;
