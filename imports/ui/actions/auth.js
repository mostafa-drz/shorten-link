import { GET_USER } from './types';

export const getUser = ({ user }) => {
    return {
        type: GET_USER,
        user
    }
}

const USER_KEY = 'sndkjndkjasndbqdwihdqijdnqwd';

export const fetchUser = () => {
    return (dispatch) => {
        const res = localStorage.getItem(USER_KEY);
        return dispatch(getUser({ user: JSON.parse(res) }));
    }
}

export const logIn = ({ user }) => {
    return (dispatch) => {
        const res = localStorage.setItem(USER_KEY, JSON.stringify(user));
        return dispatch(getUser({ user }));
    }
}

export const logOut = () => {
    return (dispatch) => {
        const res = localStorage.removeItem(USER_KEY);
        return dispatch(getUser({ user: null }));
    }
}