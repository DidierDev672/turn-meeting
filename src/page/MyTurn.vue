<template>
    <div class="container py-5">
        <div class="card-my-turns">
            <turns-user :uid="uid" />
        </div>
    </div>
</template>

<script>
import "../styles/myturn.css";
import User from "../global/index";
import TurnsUser from "../container/TurnsUser.vue";

export default {
    name: "my-turns",
    data(){
        return{
            uid: User.userUid
        }
    },
    components:{
        TurnsUser
    },
}
</script>