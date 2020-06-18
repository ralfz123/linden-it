const initialState = {
	isAuthenticated: true,
	isLoading: false,
	loginError: false,
};

export const LoginReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'LOGIN::SET_LOADING':
		return {
			...state,
			isLoading: action.value,
		};
	case 'LOGIN::SET_AUTHENTICATED':
		return {
			...state,
			isAuthenticated: action.value,
		};
	case 'LOGIN::SET_ERROR':
		return {
			...state,
			loginError: action.value,
		};

	default:
		return state;
	}
};
