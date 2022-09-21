<template>
    <div class="card-billing">
        <div class="flex-billing">
            <div class="item-billing">
                <strong>N: <span> {{ number_turn }} </span></strong>
            </div>
        </div>
    </div>
</template>

<script>
import "../styles/awaitroom.css";
export default {
    name: "list-billing",
    props:{
        number_turn: Number
    }
}
</script>