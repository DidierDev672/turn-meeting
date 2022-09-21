<template>
    <div class="item-my-turns">
        <div class="sub-card-my-turns">
            <div class="header-my-turns">
                <strong>N: <label>{{ number_turn }}</label></strong>
            </div>
            <div>
                <span><i class="fas fa-building"></i>  {{ type_turn }}</span>
            </div>
            <div>
                <span> <i class="fas fa-calendar-alt"></i> {{ date_turn }}</span>
            </div>
            <div class="state_turn" :class="{  available: available.true }">
                <span>{{ state_turn }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import "../styles/myturn.css";
export default {
    name: "user-turns",
    props:{
        number_turn: Number,
        letter_turn: String,
        date_turn: Number,
        active_turn: Boolean
    },

    computed:{
        type_turn(){
            switch(this.letter_turn){
                case "A":
                    return "Facturacion";
                case "B":
                    return "Anexos";
                case "C":
                    return "Historia clinica";
            }
        },

        state_turn(){
            switch(this.active_turn){
                case false:
                    return "Disponible";

                case true:
                    return "Atentido";
            }
        },

        available(){
            switch(this.active_turn){
                case false:
                    return false;

                case true:
                    return true;
            }
        }
    }
}
</script>

<style scoped>
.available{
    background-color: #e63946;
    color: #ffffff;
    border-radius: 5px;
    border: none;
}

.state_turn{
    background-color: #06d6a0;
    color: #ffffff;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    padding: 5px;
}
</style>