const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  const LOGIN = 'LOGIN';
  const LOGOUT = 'LOGOUT';
  switch(action.type) {
    case LOGIN:
      return state = { authenticated: true };
    case LOGOUT:
      return state = { authenticated: false };
    default:
        return state;
  };
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
