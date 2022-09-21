<template>
    <div class="card-annex">
        <div class="flex-annex">
            <div class="item-annex">
                <strong>N: <span>{{ number_turn }}</span></strong>
            </div>
        </div>
    </div>
</template>

<script>
import "../styles/awaitroom.css";
export default {
    name: "list-annex",
    props:{
        number_turn: Number,
    }
}
</script>