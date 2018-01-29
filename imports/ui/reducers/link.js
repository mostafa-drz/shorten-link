import { ADD_LINKS, VISIBLE_STATUS } from '../actions/types';

export default function listReducer(state = [], action) {
    switch (action.type) {
        case ADD_LINKS:
            return action.links;
        case VISIBLE_STATUS:
            return state.reduce((accu, current) => {
                if (current._id !== action._id) {
                    return accu.concat(current);
                } else {
                    return accu.concat({
                        ...current,
                        visible: action.visible
                    })
                }
            }, [])
        default:
            return state;
    }
}