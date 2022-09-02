import * as types from "../types-mutations"
import API from "../../api/index"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { onAuthStateChanged, updateProfile  } from "firebase/auth"
import router  from "../../router"

const auth = getAuth()

const state= () => ({
    user:[],
})

const getters = {}

const actions = {
    CreateUser({commit},{email, password}){
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            router.push({ path: '/home' })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
        })
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
    },

    editProfile({commit}, {email,displayName,password}){

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            updateProfile(auth.currentUser, {
                email: email,
                displayName: displayName
            }).then(() => {
                console.log("Success edit profile");
            }).catch((error) => {
                console.error(error);
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
        })
    },

    EditProfileFirestore({commit}, { nameUser, phone, email, password, uid, id }){
        commit(types.FETCH_USER_REQUEST);

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            if(uid !== "" && id === ""){
                API.EditProfile({uid, nameUser, phone,phone,email, password})
                .then((result) => commit(types.FETCH_USER_SUCCESS, { result }))
                .catch((error) => commit(types.FETCH_USER_FAILURE, { error }))
            }else if(this.uid !== "" && this.id !== "") {
                API.UpdateEditProfile({ id, nameUser, email, phone, uid })
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
        })
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