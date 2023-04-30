import React from "react";
import RegisterImage from "../../../../public/static/images/Register.png";

import {
	StyledRegister,
	StyledRegisterHeader,
	StyledMainRegisterWrapper,
	StyledRightSectionWrapper,
	StyledLeftSectionWrapper,
} from "./StyledRegister";
import Image from "next/image";

const Register = () => {
	return (
		<StyledRegister>
			<StyledRegisterHeader>Register</StyledRegisterHeader>
			<StyledMainRegisterWrapper>
				<StyledLeftSectionWrapper>
					<Image alt='Register' src={RegisterImage} />
				</StyledLeftSectionWrapper>
				<StyledRightSectionWrapper></StyledRightSectionWrapper>
			</StyledMainRegisterWrapper>
		</StyledRegister>
	);
};

export default Register;
