import { ADD_LINKS } from '../actions/types';

export default function listReducer(state = [], action) {
    switch (action.type) {
        case ADD_LINKS:
            return action.links;
        default:
            return state;
    }
}