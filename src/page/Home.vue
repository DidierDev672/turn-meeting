<template>
<div class="container">
    <div class="flex-box">
        <div class="box-item">
            <span>Taquilla: A</span>
            <br />
            <button type="button" class="btn-ask">Solicitar</button>
        </div>
        <div class="box-item">
            <span>Historia clinica: B</span>
            <br />
            <button type="button" class="btn-ask" @click="modalBasic">Solicitar</button>
        </div>
        <div class="box-item">
            <span>Anexos: C</span>
            <br />
            <button type="button" class="btn-ask">Solicitar</button>
        </div>
    </div>
</div>
</template>

<script>
import "../styles/home.css"
import MyTurn from "../page/MyTurn.vue"
export default {
    name: 'Home',

    components:{
        MyTurn
    },
}
</script>