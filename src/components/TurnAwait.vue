<template>
    <div class="container">
        <div class="flex-turn-await">
        <div class="box-turn-await" :class="{completed: your_turn}">
            <div class="item-turn-await">
                <span class="header-letter">{{ letter_turn }}</span>
                <span>{{ n_turn }}</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import "../styles/turnawait.css"
import types from "../global/index"
export default {
    name: "turn-await",
    props:{
        id: String,
        uuid: String,
        n_turn: Number,
        code_turn: Number,
        letter_turn: String,
        phase: Boolean,
        active_turn: Boolean
    },

    computed:{
        your_turn(){
            if(this.uuid === types.userUid){
                return true;
            }
        }
    }
};
</script>

<style scoped>
.completed{
    box-shadow: 5px 5px 5px #48cae4;
}
</style>