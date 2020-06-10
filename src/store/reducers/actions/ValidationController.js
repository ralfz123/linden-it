
class ValidationController {
  validateLoginWithCredentials = (email, password) => {
    const validEmail = 'ralf_zonneveld@hotmail.com';
	const validPassword = 'welkom123'
	return email.includes("@") && email === validEmail && password.length > 6 && password === validPassword
  };

}

export default new ValidationController();
