import * as types from "../types-mutations";
import API from "../../api/index";
import voucher_code from "voucher-code-generator";
import { db } from "../../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import Functions from "../../mixins/functions";

const state = () => ({
    fetchingData: false,
    error: null,
    turns:[
        { active_turn: false, code_turn: "fg1x", letter_turn: "A", number_turn: 5, status_turn: false  },
        { active_turn: false, code_turn: "hwKc", letter_turn: "A", number_turn: 11, status_turn: false },
        { active_turn: false, code_turn: "j7WB", letter_turn: "C", number_turn: 2, status_turn: false },
        { active_turn: true, code_turn: "je17", letter_turn: "A", number_turn: 9, status_turn: true },
        { active_turn: true, code_turn: "rlbL", letter_turn: "A", number_turn: 12, status_turn: true },
        { active_turn: true, code_turn: "Ej69", letter_turn: "C", number_turn: 4, status_turn: true },
        { active_turn: false, code_turn: "!74v", letter_turn: "C", number_turn: 3, status_turn: false },
        { active_turn: true, code_turn: "KD0p", letter_turn: "B", number_turn: 6, status_turn: true },
        { active_turn: false, code_turn: "aD41", letter_turn: "B", number_turn: 7, status_turn: false },
        { active_turn: true, code_turn: "vaXF", letter_turn: "A", number_turn: 1, status_turn: true },
        { active_turn: false, code_turn: "Ok1v", letter_turn: "B", number_turn: 10, status_turn: false },
        { active_turn: true, code_turn: "Ol9r", letter_turn: "C", number_turn: 8, status_turn: true }
    ],
    asignTurns: [],
    numberturns:[],
    awaitRoom:[],
})

const getters = {
    getListByBilling: (state) => (letter_turn) => {
        return Object.values(state.turns)
        .filter(list => list.letter_turn === letter_turn);
    },

    getListByAnnex: (state) => (letter_turn) => {
        return Object.values(state.turns)
        .filter(list => list.letter_turn === letter_turn);
    },

    getListByHistoyClinic: (state) => (letter_turn) => {
        return Object.values(state.turns)
        .filter(list => list.letter_turn === letter_turn);
    }
}

const actions = {
    async assignTurns({commit}, { uid,email, phone,number_turn,letter_turn,date_turn,code_turn}){
        commit(types.FETCH_TURNS_REQUEST);
        const numberTurns = [];
        const querySnapshot = await getDocs(collection(db, "turns"));

        querySnapshot.forEach((doc) => {
            numberTurns.push(doc.data().number_turn);
        });

        if(numberTurns.length > 0){
            number_turn = Math.max(...numberTurns) + 1;
        }else{
            numberTurns.push(0)
            number_turn = Math.max( ...numberTurns) + 1;
        }

        code_turn = voucher_code.generate({
            length: 4,
            count: 1
        });

        switch(letter_turn){
            case "billing":
                letter_turn = "A";
            break;
            case "annex":
                letter_turn = "B";
            break;
            case "historyclinic":
                letter_turn = "C";
            break;
            default:
                letter_turn = Null;
            break;
        }

        date_turn = Date.now();
        API.AssignTurn({uid, email,phone,number_turn,letter_turn,date_turn,code_turn})
        .then(( result ) => console.log(result))
        Functions.displayNotification()
    }
}

const mutations = {
    [types.FETCH_TURNS_REQUEST] (state){
        state.fetchingData = true;
        state.error = null;
    },

    [types.FETCH_TURNS_SUCCESS](state, { turns }){
        state.fetchingData = false;
        state.error = null;
        state.turns = { ...turns };
    },

    [types.FETCH_TURNS_FAILURE](state, { error }){
        state.fetchingData = false;
        state.error = error;
    },

    [types.ADD_TURNS](state, { turns }){
        state.turns = { ...turns };
    },

    [types.FETCH_NUMBER_TURNS_REQUEST](state){
        state.fetchingData = true;
        state.error = null;
    },

    [types.FETCH_NUMBER_TURNS_SUCCESS](state, { number_turns }){
        state.fetchingData = false;
        state.error = null;
        state.numberturns = number_turns;
    },

    [types.FETCH_NUMBER_TURNS_FAILURE](state, { error }){
        state.fetchingData = false;
        state.error = error;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}