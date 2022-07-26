const state = () => ({
    turn:[
        {
            id: "1",
            uid: '982a9cb2-0ae4-442f-a27b-ab7ddaeaa899',
            n_turn: 1,
            code_turn: "FR6bwx1q",
            letter_turn: "A",
            phase: false
        },
        {
            id: "2",
            uid: '982a9cb2-0ae4-442f-a27b-ab7ddaeaa899',
            n_turn: 23,
            code_turn: "ByamOdWV",
            letter_turn: "B",
            phase: true
        },
        {
            id: "3",
            uid: '982a9cb2-0ae4-442f-a27b-ab7ddaeaa899',
            n_turn: 55,
            code_turn: "7roFwfQs",
            letter_turn: "C",
            phase: true
        },
    ],

    awaitRoom:[
        {
            id:"1",
            uuid: "982a9cb2-0ae4-442f-a27b-ab7ddaeaa899",
            n_turn: 12,
            code_turn: "FR6bwx1q",
            letter_turn: "A",
            phase: true,
            active_turn: true,
        },
        {
            id: "2",
            uuid: "6ca6483e-f71c-11ec-b939-0242ac120002",
            n_turn: 13,
            code_turn: "ByamOdWV",
            letter_turn: "A",
            phase: true,
            active_turn: false,
        },
        {
            id:"3",
            uuid: "bb8d4ace-f71c-11ec-b939-0242ac120002",
            n_turn: 14,
            code_turn: "7roFwfQs",
            letter_turn: "A",
            pahese: true,
            active_turn: true,
        },
        {
            id: "4",
            uuid: "0fd762a4-f71d-11ec-b939-0242ac120002",
            n_turn: 15,
            code_turn: "rmWlwvll",
            letter_turn: "A",
            pahese: true,
            active_turn: true
        },
        {
            id: "5",
            uuid: "982a9cb2-0ae4-442f-a27b-ab7ddaeaa899",
            n_turn: 1,
            code_turn: "pgih5eAB",
            letter_turn: "C",
            pahse: true,
            active_turn: false
        },
        {
            id:"6",
            uuid: "0fd762a4-f71d-11ec-b939-0242ac120002",
            n_turn: 2,
            code_turn: "r45nhfr",
            letter_turn: "B",
            phase: true,
            active_turn: false
        }
    ]
})

const getters = {
    getturnuser: (state) => (uid) => {
        return Object.values(state.turn)
        .filter(list => list.uid === uid)
    },

    turnAvailable: (state) => (available) => {
        return Object.values(state.awaitRoom)
        .filter(list => list.active_turn === available )
    },

    turnAwait: (state) => (onCall) => {
        return Object.values(state.awaitRoom)
        .filter(list => list.active_turn === onCall)
    }
}

const actions = {}

const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}