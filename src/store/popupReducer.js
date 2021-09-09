const initialState = {
    popup: false,
}

export const popupReducer = (state = initialState, action) => {
    switch(action.type) {
        case "POP_UP": {
            return {...state, popup: !state.popup}
        }

        default:
            return state
    }
}