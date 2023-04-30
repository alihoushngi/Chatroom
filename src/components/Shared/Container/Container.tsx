import React from "react";
import { StyledContainer } from "./StyledContainer";

interface IProps {
    children: any;
}

const Container = ({ children }: IProps) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
