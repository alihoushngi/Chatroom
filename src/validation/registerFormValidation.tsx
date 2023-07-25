import * as yup from "yup";

const phoneRegExp = /^09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/;

export const registerFormValidation = yup.object({
	username: yup.string().required("Username is required"),
	name: yup.string().required("Full name is required"),
	phone: yup
		.string()
		.matches(phoneRegExp, "Phone number is not correct")
		.required("Phone number required"),
	email: yup.string().email("Email is not correct").required("Email is required"),
	password: yup.string().required("Password is required"),
});
