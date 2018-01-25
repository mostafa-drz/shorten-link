import { GET_USER } from './types';

export const getUser = ({ user }) => {
    return {
        type: GET_USER,
        user
    }
}