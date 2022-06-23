<template>
<div class="container">
    <div>
        <template v-if="uid !==''">
        <div class="flex-turn">
            <orden-turn v-for="(list, index) in listTurn" :key="index"
            :id="list.id" :n_turn="list.n_turn" :letter_turn="list.letter_turn" :phase="list.phase" />
        </div>
        </template>
        <template v-else>
            <div class="box-user">
                <span>Debe iniciar sesion para ver sus turnos..</span>
            </div>
        </template>
    </div>
</div>
</template>

<script>
import "../styles/turn.css"
import types from "../global/index"

import { mapGetters } from "vuex"
import OrdenTurn from "../components/OrdenTurn.vue"
export default {
    name: 'turn',
    data(){
        return{
            uid: types.userUid,
        }
    },

    components:{
        OrdenTurn
    },

    computed:{
        ...mapGetters('turn',[
            'getturnuser'
        ]),

        listTurn(){
            return this.getturnuser(this.uid)
        }
    }
}
</script>