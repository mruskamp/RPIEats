
export const getUsername = (state) => state.session.username;

export const getUserType = (state) => state.session.userType;

export const isLoggingIn = (state) => state.session.loggingIn;

export const loginFailed = (state) => state.session.loginFailed;