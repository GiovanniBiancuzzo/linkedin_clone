import { GET_POSTS, CREATE_POST, GET_SINGLE_POST, LOADED_POSTS, GET_POSTS_ERROR } from "../actions";

const initialState = {
    posts: [],
    actualPost: {},
    loading: true,
    error: false
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };

        case GET_SINGLE_POST:
            return {
                ...state,
                actualPost: action.payload
            };
        //? serve veramente? se creo nel server vale la pena creare anche nello store? ricarico lo store no?
        // case CREATE_POST:
        //     return {
        //         ...state,
        //         posts: action.payload
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
        case LOADED_POSTS:
            return {
                ...state,
                loading: !state.loading
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default postsReducer;
