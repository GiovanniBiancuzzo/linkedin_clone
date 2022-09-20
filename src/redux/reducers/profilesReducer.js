import { ADD_TO_PROFILES, LOADED_PROFILES, GET_PROFILES_ERROR, GET_PROFILE, UPDATE_PROFILE } from "../actions";

const initialState = {
    profiles: [],
    actualProfile: {},
    loading: true,
    error: false
};

const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_PROFILES:
            return {
                ...state,
                profiles: action.payload
            };
        case GET_PROFILE:
            return {
                ...state,
                actualProfile: action.payload
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                profiles: {
                    ...state.profiles,
                    _id: action.payload
                }
            };
        case LOADED_PROFILES:
            return {
                ...state,
                loading: !state.loading
            };
        case GET_PROFILES_ERROR:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default profilesReducer;
