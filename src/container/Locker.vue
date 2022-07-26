<template>
<div class="container">
    <div class="flex-locker">
        <basic-turn />
    </div>
</div>
</template>

<script>
import "../styles/locker.css"
import BasicTurn from "../components/BasicTurn.vue"
export default {
    name:'locker',
    components:{
        BasicTurn
    }
}
</script>