import * as actionTypes from './models/actions';

export const addItem = (data: string) => ({
    type:actionTypes.ADD_ITEM,
    description: data
})