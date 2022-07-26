<template>
<div class="container-await-room">
<div class="turn-available">
    <span>Turnos en taquillas</span>
    <div class="flex-turn-available-await">
        <turn-available v-for="(list, index) in listTurnAvailable" :key="index"
        :id="list.id" :uuid="list.uuid" :n_turn="list.n_turn" :code_turn="list.code_turn"
        :letter_turn="list.letter_turn" :phase="list.phase" :active_turn="list.active_turn" />
    </div>
</div>
<div class="turn-await">
    <span>Turnos en espera</span>
    <div class="flex-turn-onCall-await">
        <turn-await v-for="(list, index) in listTurnAwait" :key="index"
        :id="list.id" :uuid="list.uuid" :n_turn="list.n_turn" :code_turn="list.code_turn"
        :letter_turn="list.letter_turn" :phase="list.phase" :active_turn="list.active_turn" />
    </div>
</div>
</div>
</template>

<script>
import "../styles/awaitroom.css"
import TurnAvailable from "../components/TurnAvailable.vue"
import TurnAwait from "../components/TurnAwait.vue"
import { mapGetters } from "vuex"
export default {
    name: 'await-room',
    data(){
        return{
            available: true,
            onCall: false,
        }
    },
    components:{
        TurnAvailable,
        TurnAwait
    },
    computed:{
        ...mapGetters('turn', [
            'turnAvailable',
            'turnAwait'
        ]),

        listTurnAvailable(){
            return this.turnAvailable(this.available)
        },

        listTurnAwait(){
            return this.turnAwait(this.onCall)
        }
    }
}
</script>