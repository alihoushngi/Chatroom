import React from "react";

import {
	StyledForm,
	StyledFormWrapper,
	StyledInputWrapper,
	StyledLabel,
	StyledTooltip,
	StyledButton,
} from "./StyledRegister";
import Input from "@base/Input/Input";
import { RegisterTypes } from "./registerType";
import { useFormik } from "formik";
import { registerFormValidation } from "src/validation/registerFormValidation";

const Register = () => {
	const initialValue: RegisterTypes = {
		username: "",
		name: "",
		phone: "",
		email: "",
		password: "",
	};

	const handleSubmit = (value: RegisterTypes) => {
		const formData = {
			username: value.username,
			name: value.name,
			email: value.email,
			phone: value.phone,
			password: value.password,
		};
		console.log(formData);
	};

	const formik = useFormik({
		initialValues: initialValue,
		validationSchema: registerFormValidation,
		onSubmit: handleSubmit,
	});

	return (
		<StyledForm onSubmit={formik.handleSubmit}>
			<StyledFormWrapper>
				<StyledInputWrapper>
					<StyledLabel htmlFor='username'>
						<StyledTooltip title='required'>🔻</StyledTooltip>
						User name
					</StyledLabel>
					<Input
						value={formik.values.username}
						type='text'
						id='username'
						name='username'
						onChange={(e) => {
							formik.setValues({
								...formik.values,
								username: e.target.value,
							});
						}}
						onFocus={() =>
							formik.setTouched({
								username: true,
							})
						}
						error={
							formik.errors.username && formik.touched.username
								? formik.errors.username
								: ""
						}
					/>
				</StyledInputWrapper>
				<StyledInputWrapper>
					<StyledLabel htmlFor='name'>
						<StyledTooltip title='required'>🔻</StyledTooltip>
						Full name
					</StyledLabel>
					<Input
						value={formik.values.name}
						type='text'
						id='name'
						name='name'
						onChange={(e) => {
							formik.setValues({
								...formik.values,
								name: e.target.value,
							});
						}}
						onFocus={() =>
							formik.setTouched({
								name: true,
							})
						}
						error={formik.errors.name && formik.touched.name ? formik.errors.name : ""}
					/>
				</StyledInputWrapper>
				<StyledInputWrapper>
					<StyledLabel htmlFor='phone'>
						<StyledTooltip title='required'>🔻</StyledTooltip>
						Phone number
					</StyledLabel>
					<Input
						inputMode='numeric'
						maxLength={11}
						minLength={11}
						value={formik.values.phone}
						type='text'
						id='phone'
						name='phone'
						onChange={(e) => {
							formik.setValues({
								...formik.values,
								phone: e.target.value,
							});
						}}
						onFocus={() =>
							formik.setTouched({
								phone: true,
							})
						}
						error={
							formik.errors.phone && formik.touched.phone ? formik.errors.phone : ""
						}
					/>
				</StyledInputWrapper>
				<StyledInputWrapper>
					<StyledLabel htmlFor='email'>
						<StyledTooltip title='required'>🔻</StyledTooltip>
						Email
					</StyledLabel>
					<Input
						inputMode='email'
						value={formik.values.email}
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
						error={
							formik.errors.email && formik.touched.email ? formik.errors.email : ""
						}
					/>
				</StyledInputWrapper>
				<StyledInputWrapper>
					<StyledLabel htmlFor='password'>
						<StyledTooltip title='required'>🔻</StyledTooltip>
						Password
					</StyledLabel>
					<Input
						value={formik.values.password}
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
			</StyledFormWrapper>
			<StyledButton type='submit'>Register</StyledButton>
		</StyledForm>
	);
};

export default Register;
