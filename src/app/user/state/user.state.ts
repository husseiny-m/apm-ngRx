export interface UserState {
  maskUserName: boolean;
}
const initState = {
  maskUserName: true
};
export function reducer(state = initState, action) {
  switch (action.type) {
    case 'TOGGLE_USER_MASK':
      return { ...state, maskUserName: action.payload };
    default:
      return state;
  }
}
