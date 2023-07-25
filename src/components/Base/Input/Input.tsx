import React, { forwardRef, InputHTMLAttributes, Ref } from "react";
import {
  StyledInputError,
  StyledInputWrapper,
  StyledSearchIcon,
  StyledTextInput,
} from "./StyledModal";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: any) => void;
  error?: string;
  type: string;
  icon?: boolean;
  IconCode?: string;
}

const Input = forwardRef(
  (
    { value, onChange, error, type, icon, IconCode, ...props }: IProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <StyledInputWrapper>
        <StyledTextInput
          ref={ref}
          value={value}
          onChange={onChange}
          type={type}
          autoComplete="off"
          {...props}
        />
        {error && <StyledInputError>{error}</StyledInputError>}
        {icon && <StyledSearchIcon className={IconCode}></StyledSearchIcon>}
      </StyledInputWrapper>
    );
  }
);

Input.displayName = "Input";
export default Input;
