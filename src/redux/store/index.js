import { configureStore, combineReducers } from '@reduxjs/toolkit';
import profilesReducer from '../reducers/profilesReducer';
import experiencesReducer from '../reducers/experiencesReducer';

import { persistStore, persistReducer } from 'redux-persist';//i metodi di persist
import storage from 'redux-persist/lib/storage';
import postsReducer from '../reducers/postsReducer';
// import { encryptTransform } from 'redux-persist-transform-encrypt';

const mainReducer = combineReducers({
    profile: profilesReducer,
    experience: experiencesReducer,
    post: postsReducer
});

const persistConfig = ({
    key: 'root',//da dove vogliamo cominciare a salvare informazioni
    storage,//o anche solo 'storage'
    // blacklist: ['post'],
    // transforms: [encryptTransform({
    //     secretKey: process.env.REACT_APP_PERSIST_KEY//chiave contenuta in .env
    // })]
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistedStore = persistStore(store)

