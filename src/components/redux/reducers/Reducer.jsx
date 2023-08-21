export const initialState = {
    carts: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddCart':

            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }

                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
        case 'RmvCart':
            const data = state.carts.filter((e) => e.id !== action.payload);
            return {
                ...state,
                carts: data
            }

        case 'RemoveOne':
            const itemIndexDce = state.carts.findIndex((item) => item.id === action.payload.id)
            if (state.carts[itemIndexDce].qnty > 1) {
                const dltOne = state.carts[itemIndexDce].qnty -= 1
                console.log([state.carts, dltOne])
                return {
                    ...state,
                    carts: [...state.carts]
                }
                // } else if (state.carts[itemIndexDce].qnty === 1) {
                //     const data = state.carts.filter((e) => e.id !== action.payload);
                //     return {
                //         ...state,
                //         carts: data
                //     }


            }


        default:
            return state
    }
}