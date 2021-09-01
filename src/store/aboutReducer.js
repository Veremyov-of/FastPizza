const initialState = {
    about: false
}

export const aboutReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_ABOUT':
            state.about = action.payload;
            return state;
        default:
            return state
    }
}