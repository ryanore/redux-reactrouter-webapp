const INITIAL_STATE = {
  user: {role: 'customer'},
  access_token: null,
  loggedIn: false,
  isAuthenticating: false,
  statusText: null
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  return state;
}
