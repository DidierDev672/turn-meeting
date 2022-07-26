import * as types from "../types-mutations"
import API from "../../api/index"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { onAuthStateChanged  } from "firebase/auth"
import router  from "../../router"

const auth = getAuth()

const state= () => ({
    user:[],
})

const getters = {}

const actions = {
    CreateUser({commit},{email, password}){
        createUserWithEmailAndPassword(auth,email, password);
    },

    authUser({commit}, { email, password}){
        signInWithEmailAndPassword(auth,email, password)
        .then(() => {
            router.push({ path: '/home' });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Error code: ${errorCode}`);
            console.log(`Error Message: ${errorMessage}`);
        });
    },

    watchfulAuth(){
        onAuthStateChanged(auth, (user) => {
            if(user){
                router.push({ path: '/home' });
            }
        });
    }
}

const mutations = {
    [types.FETCH_USER_REQUEST] (state){
        state.fetchingData = true
        state.error = null
    },

    [types.FETCH_USER_SUCCESS] (state, {piece}){
        state.fetchingData = false
        state.error = null
        state.user = { ...piece }
    },

    [types.FETCH_USER_FAILURE] (state, { error }){
        state.fetchingData = false
        state.error = error
    }
}

export default  {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}