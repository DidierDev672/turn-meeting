<template>
<section>
    <div class="style-turn">
        <div class="design-border">
            <div class="item-border">
                <span class="letter-turn">{{ letter_turn  }}</span>
            </div>
            <div class="item-border">
                <span class="n-turn">{{ n_turn }}</span>
            </div>
        </div>
        <div :class="{completed: phase, desactive: phase == false}">
            <span> {{ state_turn }} </span>
        </div>
    </div>
</section>
</template>

<script>
import "../styles/ordenturn.css"
export default {
    name: "orden-turn",
    props:{
        id: String,
        letter_turn: String,
        n_turn: Number,
        phase: Boolean,
    },
    computed:{
        state_turn(){
            return this.phase == true ? 'Activo': 'Desastivado'
        },
    }
}
</script>

<style scoped>
.completed{
    background-color: #9ef01a;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    box-shadow: 2px 2px 2px #9ef01a;
    padding: 3px;
}

.desactive{
    background-color: #ff0a54;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    box-shadow: 2px 2px 2px #ff477e;
    padding: 3px;
}
</style>