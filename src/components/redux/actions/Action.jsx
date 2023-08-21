//add item
export const Add = (item) => {
    return {
        type: 'AddCart',
        payload: item
    }
}
//delete item
export const Dlt = (item) => {
    return {
        type: 'RmvCart',
        payload: item
    }
}

//remove one item
export const Remove = (item) => {
    return {
        type: 'RemoveOne',
        payload: item
    }
}