export const ADD_TO_LIST = 'ADD_TO_LIST';
export const GET_PROFILE = 'GET_PROFILE';
export const LOADED_LIST = 'LOADED_LIST';
export const GET_LIST_ERROR = 'GET_LIST_ERROR';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';


const endpointProfileApi =
    "https://striveschool-api.herokuapp.com/api/profile/";

const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MTg5ZDZkNzlhNTAwMTUwOTAyZTciLCJpYXQiOjE2NjM1NzIxMjUsImV4cCI6MTY2NDc4MTcyNX0.6bJFxOHIifx_59Q1Ufr2BmkINZTRZD9wO-HNuiHA-iU";

export const addToListAction = () => {
    return (dispatch, getState) => {
        fetch(`${endpointProfileApi}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${key}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: ADD_TO_LIST,
                    payload: data
                });
                setTimeout(() => {
                    dispatch({
                        type: LOADED_LIST,
                    });
                }, 200);
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: LOADED_LIST,
                });
                dispatch({
                    type: GET_LIST_ERROR,
                });
            });
    };
};


export const getProfileAction = (userID) => {
    return (dispatch, getState) => {
        fetch(`${endpointProfileApi}${userID}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${key}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_PROFILE,
                    payload: data
                });
                setTimeout(() => {
                    dispatch({
                        type: LOADED_LIST,
                    });
                }, 200);
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: LOADED_LIST,
                });
                dispatch({
                    type: GET_LIST_ERROR,
                });
            });
    };
};

export const updateProfileAction = (data) => {
    return (dispatch, getState) => {
        fetch(`${endpointProfileApi}`, {
            method: "PUT",
            headers: {
                // "Content-Type": "application/json",
                Authorization: `Bearer ${key}`,
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(() => {
                dispatch({
                    type: UPDATE_PROFILE,
                    payload: data
                });
                setTimeout(() => {
                    dispatch({
                        type: LOADED_LIST,
                    });
                }, 200);
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: LOADED_LIST,
                });
                dispatch({
                    type: GET_LIST_ERROR,
                });
            });
    };
};

//? vecchie chiamate api base usate nel component come partenza, poi passate alle action
// const endpointProfileApi =
    //     "https://striveschool-api.herokuapp.com/api/profile/";

    // const key =
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MTg5ZDZkNzlhNTAwMTUwOTAyZTciLCJpYXQiOjE2NjM1NzIxMjUsImV4cCI6MTY2NDc4MTcyNX0.6bJFxOHIifx_59Q1Ufr2BmkINZTRZD9wO-HNuiHA-iU";

    // // - GET https://striveschool-api.herokuapp.com/api/profile/
    // // Ritorna la lista dei profili utente
    // const fetchAllProfile = () => {
    //     fetch(endpointProfileApi, {
    //         method: "GET",
    //         headers: { Authorization: `Bearer ${key}` },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setProfile(data))
    //         .catch((error) => console.log(error));
    // };

    // // - GET https://striveschool-api.herokuapp.com/api/profile/me
    // // Ritorna il tuo profilo
    // const fetchMyProfile = () => {
    //     fetch(`${endpointProfileApi}me`, {
    //         method: "GET",
    //         headers: { Authorization: `Bearer ${key}` },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setProfile(data))
    //         .catch((error) => console.log(error));
    // };

    // // - GET https://striveschool-api.herokuapp.com/api/profile/{userId}
    // // Ritorna un profilo specifico
    // const fetchSingleProfile = () => {
    //     fetch(`${endpointProfileApi}${userID}`, {
    //         method: "GET",
    //         headers: { Authorization: `Bearer ${key}` },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setProfile(data);
    //         })
    //         .catch((error) => console.log(error));
    // };

    // // - PUT https://striveschool-api.herokuapp.com/api/profile/
    // // Aggiorna il profilo utente
    // const updateProfile = () => {
    //     fetch(`${endpointProfileApi}`, {
    //         method: "PUT",
    //         headers: {
    //             // "Content-Type": "application/json",
    //             Authorization: `Bearer ${key}`,
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             console.log("Success");
    //         })
    //         .catch((error) => console.log(error));
    // };