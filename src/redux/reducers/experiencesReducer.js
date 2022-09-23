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
        //? serve veramente? se creo nel server vale la pena creare anche nello store? ricarico lo store no?
        // case CREATE_EXPERIENCE:
        //     return {
        //         ...state,
        //         experiences: [...state.experiences, action.payload]
        //     };
        //? serve veramente? se modifico nel server vale la pena modificare anche nello store? ricarico lo store no?
        // case UPDATE_EXPERIENCE:
        //     return {
        //         ...state,
        //         experiences: {
        //             ...state.profiles,
        //             _id: action.payload
        //         }
        //     };
        //? serve veramente? se cancello nel server vale la pena cancellare anche nello store? ricarico lo store no?
        // case DELETE_EXPERIENCE:
        //     return {
        //         ...state,
        //         experiences: state.experiences.filter((experience) => experience._id !== action.payload)
        //     };
        case LOADED_EXPERIENCES:
            return {
                ...state,
                loading: false
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
