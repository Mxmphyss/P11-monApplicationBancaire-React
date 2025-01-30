const initialState = {
  token: localStorage.getItem('token') || ''
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};

export { LOGIN, LOGOUT }

export default loginReducer;