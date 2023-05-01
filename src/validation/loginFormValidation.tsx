import * as yup from "yup";

export const loginFormValidation = yup.object({
	email: yup.string().email("Email is not correct").required("Email is required"),
	password: yup.string().required("Password is required"),
});
