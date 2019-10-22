const initialState = {
    items: [],
};

const attachments = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'ATTACHMENTS:SET_ITEMS':
            return {
                ...state,
                items: payload
            };
        case 'ATTACHMENTS:REMOVE_FILE':
            return {
                ...state,
                items: state.items.filter(file => file._id !== payload)
            };
        default:
            return state;
    }
};

export default attachments;