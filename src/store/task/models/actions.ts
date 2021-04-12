export const ADD_ITEM = "Add_Item";
export const REMOVE_ITEM = "Remove_Item";

interface AddItem {
    type: typeof ADD_ITEM;
    description:string;
}

interface RemoveItem {
    type: typeof REMOVE_ITEM;
}

export type TaskActionTypes = AddItem | RemoveItem