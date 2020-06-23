
/**
 * Returns the loading state for login
 * @param  {any} state
 * @return
 */
export const getLoginLoadingState = state => state.login.isLoading;

/**
 * Returns the error state for login
 * @param  {any} state
 * @return
 */
export const getLoginErrorState = state => state.login.loginError;

/**
 * Returns user authentication state
 * @param  {any} state
 * @return
 */
export const getUserAuthState = state => state.login.isAuthenticated;

