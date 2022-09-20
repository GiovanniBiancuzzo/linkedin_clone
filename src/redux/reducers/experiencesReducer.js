import { GET_EXPERIENCES, GET_SINGLE_EXPERIENCE, CREATE_EXPERIENCE, DELETE_EXPERIENCE, LOADED_EXPERIENCES, GET_EXPERIENCES_ERROR, UPDATE_EXPERIENCE } from "../actions";

const initialState = {
    experiences: [],
    actualExperience: {},
    loading: true,
    error: false
};

const experiencesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXPERIENCES:
            return {
                ...state,
                experiences: action.payload
            };
        case GET_SINGLE_EXPERIENCE:
            return {
                ...state,
                actualExperience: action.payload
            };
        case CREATE_EXPERIENCE:
            return {
                ...state,
                experiences: [...state.experiences, action.payload]
            };
        case UPDATE_EXPERIENCE:
            return {
                ...state,
                experiences: {
                    ...state.profiles,
                    _id: action.payload
                }
            };
        case DELETE_EXPERIENCE:
            return {
                ...state,
                experiences: state.experiences.filter((experience) => experience._id !== action.payload)
            };
        case LOADED_EXPERIENCES:
            return {
                ...state,
                loading: !state.loading
            };
        case GET_EXPERIENCES_ERROR:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default experiencesReducer;
