import { ADD_LINKS, VISIBLE_STATUS } from './types';
import { Meteor } from 'meteor/meteor';
export const addLinks = ({ links }) => {
    return {
        type: ADD_LINKS,
        links
    }
}

export const updateVisible = ({ _id, visible }) => {
    return (dispatch) => {
        Meteor.call('links.updateVisiblity', { _id, visible }, (error, result) => {
            if (error) {
                throw new Meteor.Error(error);
            } else {
                dispatch({ type: VISIBLE_STATUS, _id, visible });
            }
        });
    }
}