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
        }
    ]
})

const getters = {
    getturnuser: (state) => (uid) => {
        return Object.values(state.turn)
        .filter(list => list.uid === uid)
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