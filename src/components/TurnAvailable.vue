<template>
<div class="container">
    <div class="flex-turn-available">
        <div class="box-turn-available" :class="{completed: your_turn}">
            <div class="item-box-turn">
                <span class="header-letter">{{ letter_turn }}</span>
                <span>{{ n_turn }}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import "../styles/turnavailable.css"

import types from "../global/index"
export default {
    name: 'turn-available',
    props:{
        id: String,
        uuid: String,
        n_turn:Number,
        code_turn: String,
        letter_turn: String,
        phase: Boolean,
        active_turn: Boolean,
    },

    compuuted:{
        your_turn(){
            if(this.uuid === types.userUid){
                return true;
            }
        }
    }
}
</script>

<style scoped>
.completed{
    box-shadow: 5px 5px 5px #ade8f4;
}
</style>