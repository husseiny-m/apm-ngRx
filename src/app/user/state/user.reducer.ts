import { UserActions, UserActionTypes } from './user.actions';
export interface UserState {
  maskUserName: boolean;
}
const initState = {
  maskUserName: true
};
export function reducer(state = initState, action: UserActions) {
  switch (action.type) {
    case UserActionTypes.MaskUserName:
      return { ...state, maskUserName: action.payload };
    default:
      return state;
  }
}
