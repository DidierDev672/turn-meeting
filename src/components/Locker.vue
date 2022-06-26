<template>
<div class="container">
    <div class="flex-locker">
        <div class="box-locker">
            <div class="item-box-locker">
                <span>Facturacion</span>
                <span class="header-letter-locker">A</span>
            </div>
            <button-locker-ask />
        </div>
        <div class="box-locker">
            <div class="item-box-locker">
                <span>Anexos</span>
                <span class="header-letter-locker">B</span>
            </div>
            <button-locker-ask />
        </div>
        <div class="box-locker">
            <div class="item-box-locker">
                <span>Historia Clinica</span>
                <span class="header-letter-locker">C</span>
            </div>
            <button-locker-ask />
        </div>
    </div>
</div>
</template>

<script>
import "../styles/locker.css"
import ButtonLockerAsk from "../components/ButtonLockerAsk.vue"
export default {
    name:'locker',
    components:{
        ButtonLockerAsk
    }
}
</script>