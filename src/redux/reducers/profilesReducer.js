import { ADD_TO_LIST, LOADED_LIST, GET_LIST_ERROR, GET_PROFILE, UPDATE_PROFILE } from "../actions";

const initialState = {
    list: [],
    actualProfile: {},
    loading: true,
    error: false
};

const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            return {
                ...state,
                list: action.payload
            };
        case GET_PROFILE:
            return {
                ...state,
                actualProfile: action.payload
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                list: {
                    ...state.list,
                    _id: action.payload
                }
            };
        case LOADED_LIST:
            return {
                ...state,
                loading: !state.loading
            };
        case GET_LIST_ERROR:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default profilesReducer;
