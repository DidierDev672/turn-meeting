<template>
<div class="container">
    <div class="flex-box">
        <div class="box-item">
            <locker />
        </div>
    </div>
</div>
</template>

<script>
import "../styles/home.css"

import Locker from "../container/Locker.vue"
export default {
    name: 'Home',

    data(){
        return{
            letter_A: 'A',
            letter_B: 'B',
            letter_C: 'C'
        }
    },

    components:{
        Locker
    },
}
</script>