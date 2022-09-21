<template>
    <div class="card-history-clinic">
        <div class="flex-history-clinic">
            <div class="item-history-clinic">
                <strong>N: <span> {{ number_turn }} </span></strong>
            </div>
        </div>
    </div>
</template>

<script>
import "../styles/awaitroom.css";
export default {
    name: "list-history-clinic",
    props:{
        number_turn: Number
    }
}
</script>