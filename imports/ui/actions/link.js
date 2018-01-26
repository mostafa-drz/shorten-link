import { ADD_LINKS } from './types';

export const addLinks = ({ links }) => {
    return {
        type: ADD_LINKS,
        links
    }
}