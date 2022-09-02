<template>
    <div class="container py-3">
        <div class="box-card-sign-up">
            <form>
                <div class="flex-form-sign-up">
                    <div class="flex-item-sign-up">
                        <label class="title-sign-up">Sign Up</label>
                    </div>
                    <div class="flex-item-sign-up">
                        <label for="email">Correo electronico</label>
                        <input type="email" id="email"
                        class="text-campo" v-model="email" required
                        placeholder="example@example.com"/>
                    </div>
                    <div class="flex-item-sign-up">
                        <label for="pwd">Contraseña</label>
                        <input type="password" id="pwd"
                        class="text-campo" placeholder="****************"
                        required v-model="pwd"/>
                    </div>
                    <div class="flex-item-sign-up">
                        <button type="button" class="btn-sign-up" @click="createUser()" >Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import "../styles/signup.css";

import {mapActions } from "vuex";
export default {
    name: "sign-up",
    data(){
        return{
            email: "",
            pwd: ""
        }
    },

    methods:{
        ...mapActions("user", [
            "CreateUser",
            "watchfulAuth"
        ]),

        createUser(){
            if(this.email !== "" && this.pwd !== ""){
            this.CreateUser({
                email: this.email,
                password: this.pwd
            });
            }else{
                alert("Deben llenar todos los campos!");
            }
        }
    },

    created(){
        this.watchfulAuth();
    }
}
</script>