// {type: 'LOGGED_IN_USER', payload: {name: 'Dale', role: 'Seller'}}
export const authReducer = (
  state = { name: 'Dale', role: 'Seller' },
  action
) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return action.payload;
    default:
      return state;
  }
};
