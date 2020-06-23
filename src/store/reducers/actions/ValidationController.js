class ValidationController {
	validateLoginWithCredentials = (email, password) => {
		const validEmail = 'mike@lindenit.nl';
		const validPassword = '1234567';
		return (
			email.includes('@') &&
			email === validEmail &&
			password.length > 6 &&
			password === validPassword
		);
	};
}

export default new ValidationController();
