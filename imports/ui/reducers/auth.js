import { GET_USER } from '../actions/types';

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case GET_USER:
            return {
                user: action.user
            };
        default:
            return state;
    }
}