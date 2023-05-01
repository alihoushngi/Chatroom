import React from "react";
import {
	StyledImageWrapper,
	StyledLeftSectionWrapper,
	StyledMainRegisterWrapper,
	StyledRegisterHeader,
	StyledRightSectionWrapper,
	StyledWrapperForm,
} from "./StyledLoginRegisterForm";
import Register from "@components/Shared/Register/Register";
import Login from "@components/Shared/Login/Login";
import Image from "next/image";
import loginImage from "@images/Register.png";

const LoginRegisterForm = () => {
	return (
		<StyledWrapperForm>
			<StyledMainRegisterWrapper>
				<StyledLeftSectionWrapper>
					<StyledRegisterHeader>Register</StyledRegisterHeader>
					<Register />
				</StyledLeftSectionWrapper>
				<StyledRightSectionWrapper>
					<StyledRegisterHeader>Login</StyledRegisterHeader>
					<StyledImageWrapper>
						<Image alt='login' src={loginImage} width={200} />
					</StyledImageWrapper>
					<Login />
				</StyledRightSectionWrapper>
			</StyledMainRegisterWrapper>
		</StyledWrapperForm>
	);
};

export default LoginRegisterForm;
