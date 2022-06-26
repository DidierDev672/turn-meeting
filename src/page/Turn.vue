<template>
<div class="container">
    <div class="box-turn">
        <div class="flex-turn">
            <div class="grid-turn">
                <div class="grid-item">
                    <input type="checkbox" />
                    <div class="type-turn">
                        <span>Facturacion</span>
                    </div>
                    <div class="number-turn">
                        <span>A</span>
                    </div>
                </div>
                <div class="grid-item">
                    <input type="checkbox" />
                    <div class="type-turn">
                        <span>Anexos</span>
                    </div>
                    <div class="number-turn">
                        <span class="letter_turn">B</span>
                    </div>
                </div>
                <div class="grid-item">
                    <input type="checkbox" />
                    <div class="type-turn">
                        <span>Historia clinica</span>
                    </div>
                    <div class="number-turn">
                        <span class="letter_turn">C</span>
                    </div>
                </div>
            </div>
        </div>
        <basic-turn />
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