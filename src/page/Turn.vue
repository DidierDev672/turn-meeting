<template>
<div class="container">
    <div class="box-turn">
        <div class="flex-turn">
            <basic-turn />
        </div>
    </div>
</div>
</template>

<script>
import "../styles/turn.css"

import BasicTurn from "../components/BasicTurn.vue"
export default {
    name: 'turn',
    components:{
        BasicTurn
    }
}
</script>