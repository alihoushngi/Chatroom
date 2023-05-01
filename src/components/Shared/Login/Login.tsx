import Input from "@base/Input/Input";
import { useFormik } from "formik";
import React from "react";
import { loginFormValidation } from "src/validation/loginFormValidation";
import { LoginType } from "./loginTypes";

import {
	StyledForm,
	StyledInputLabel,
	StyledInputWrapper,
	StyledSubmitButton,
} from "./StyledLogin";

const Login = () => {
	const initialValue: LoginType = {
		email: "",
		password: "",
	};
	const handleSubmit = (value: LoginType) => {
		console.log(value);
	};

	const formik = useFormik({
		initialValues: initialValue,
		validationSchema: loginFormValidation,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

	return (
		<StyledForm onSubmit={formik.handleSubmit}>
			<StyledInputWrapper>
				<StyledInputLabel htmlFor='email'> Email</StyledInputLabel>
				<Input
					value={formik.values.email}
					autoComplete='off'
					autoCorrect='off'
					autoCapitalize='off'
					spellCheck='false'
					type='text'
					id='email'
					name='email'
					onChange={(e) => {
						formik.setValues({
							...formik.values,
							email: e.target.value,
						});
					}}
					onFocus={() =>
						formik.setTouched({
							email: true,
						})
					}
					error={formik.errors.email && formik.touched.email ? formik.errors.email : ""}
				/>
			</StyledInputWrapper>
			<StyledInputWrapper>
				<StyledInputLabel htmlFor='password'> Password</StyledInputLabel>
				<Input
					value={formik.values.password}
					autoComplete='off'
					autoCorrect='off'
					autoCapitalize='off'
					spellCheck='false'
					type='password'
					id='password'
					name='password'
					onChange={(e) => {
						formik.setValues({
							...formik.values,
							password: e.target.value,
						});
					}}
					onFocus={() =>
						formik.setTouched({
							password: true,
						})
					}
					error={
						formik.errors.password && formik.touched.password
							? formik.errors.password
							: ""
					}
				/>
			</StyledInputWrapper>
			<StyledSubmitButton type='submit'>Login</StyledSubmitButton>
		</StyledForm>
	);
};

export default Login;
