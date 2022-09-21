<template>
    <div class="container-fluid py-3">
        <div class="card-await-room">
            <div class="header-await-room">
                <h3 class="title-await-ticket">Sala de espera</h3>
            </div>
            <div class="flex-attention-room">
                <attention-ticket />
            </div>
            <div class="flex-await-room py-3">
                <await-ticket />
            </div>
        </div>
    </div>
</template>

<script>
import "../styles/awaitroom.css";
import AwaitTicket from "../container/AwaitTicket.vue";
import AttentionTicket from "../container/AttentionTicket.vue";
export default {
    name: "await-room",
    components:{
        AwaitTicket,
        AttentionTicket
    }
}
</script>