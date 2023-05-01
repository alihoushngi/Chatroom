import React, { forwardRef, InputHTMLAttributes, Ref } from "react";
import {
    StyledInputError,
    StyledInputWrapper,
    StyledTextInput,
} from "./StyledModal";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (e: any) => void;
    error?: string;
}

const Input = forwardRef(
    (
        { value, onChange, error, ...props }: IProps,
        ref: Ref<HTMLInputElement>
    ) => {
        return (
            <StyledInputWrapper>
                <StyledTextInput
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    type="text"
                    autoComplete="off"
                    {...props}
                />
                {error && <StyledInputError>{error}</StyledInputError>}
            </StyledInputWrapper>
        );
    }
);

Input.displayName = "Input";
export default Input;
