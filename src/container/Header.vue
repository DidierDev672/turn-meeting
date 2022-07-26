<template>
<div class="container">
    <nav class="box-navbar">
        <div class="header-header-turn">
            <router-link to="/" class="list-link title-header-turn">Turn Meeting</router-link>
        </div>
        <ul class="list-box">
            <li class="list-item">
                <router-link to="/" class="list-link">Home</router-link>
            </li>
            <li class="list-item">
                <router-link to="/turn" class="list-link">Turnos</router-link>
            </li>
            <li class="list-item">
                <router-link to="/my-turn" class="list-link">Mis turnos</router-link>
            </li>
            <li class="list-item">
                <router-link to="/await-room" class="list-link">Sala espera</router-link>
            </li>
        </ul>
        <ul class="list-box-right">
            <template v-if="uid !== ''">
                <header-user :uid="uid" :email="email" :name_full="name_full" />
            </template>
            <template v-else>
                <li class="list-item">
                <router-link to="/sign-in" class="list-link">Sign In</router-link>
            </li>
            <li class="list-item">
                <router-link to="/sign-up" class="list-link">Sign Up</router-link>
            </li>
            </template>
        </ul>
    </nav>
</div>
</template>

<script>
import "../styles/header.css";
import HeaderUser from "../components/HeaderUser.vue";
import { auth } from "../api/firebase";
import { onAuthStateChanged } from "firebase/auth";
export default {
    name: 'Header',
    data(){
        return{
            uid: "",
            email: "",
            name_full: ""
        }
    },

    components:{
        HeaderUser
    },

    created(){
        onAuthStateChanged(auth, (user) => {
            if(user){
                this.uid = user.uid,
                this.email = user.email,
                this.name_full = user.name
            }
        });
    }
}
</script>