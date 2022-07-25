<template>
<div class="container">
    <div class="box-sign">
        <form  class="flex-sign">
            <div class="sign-item">
                <label for="email">Correo electronico</label>
                <input type="text" id="email" v-model="email" class="text-input" placeholder="example@example.com" required />
            </div>
            <div class="sign-item">
                <label for="pwd">Password</label>
                <input type="password" id="pwd" v-model="pwd" class="text-input" placeholder="***********" required />
            </div>
            <div class="sign-item">
                <router-link to="/sign-up" class="text-link">Registrar usuario</router-link>
            </div>
            <div class="sign-item">
                <button type="button" class="btn-sign-in" @click="AuthUser()">Iniciar Session</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import "../styles/SignIn.css";
import { mapActions } from "vuex";
export default {
    name: "sign-in",
    data(){
        return{
            email: "",
            pwd:""
        }
    },
    methods:{
        ...mapActions("user", [
            "authUser",
            "watchfulAuth"
        ]),

        AuthUser(){
            if(this.email !== "" && this.pwd !== ""){
                this.authUser({
                    email: this.email,
                    password: this.pwd
                })
            }else{
                alert("Debe ingresar todos los campos");
            }
        }
    },
    created(){
        this.watchfulAuth();
    }
}
</script>