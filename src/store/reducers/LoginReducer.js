const initialState = {
    isAuthenticated: false,
    isLoading: false
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
        default:
            return state;
    }
};
  