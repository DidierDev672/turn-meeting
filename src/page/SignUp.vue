<template>
    <div class="container">
        <form class="box-sign-up" action="./SignUp.vue" method="post">
        <label class="title-sign-up">Register User </label>
        <div class="flex-sign-up">
            <div class="sign-item">
            <label>Correo electronico</label>
            <input
                type="text"
                class="text-input"
                v-model="email"
                placeholder="example@example.com"
                pattern="/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/"
                required
            />
            </div>
            <div class="sign-item">
            <label>Contraseña</label>
            <input
                type="password"
                class="text-input"
                v-model="password_user"
                pattern="^(?=w*\d)(?=\w*[a-z])\S{8,16}$"
                placeholder="Contraseña"
                required
            />
            </div>
        </div>
        <div class="item-button">
            <input type="submit" class="btn-sign-up" @click="CreateAuth()" value="Registrar" />
        </div>
        </form>
    </div>
</template>

<script>
import "../styles/signup.css";
import { mapActions } from "vuex";
export default {
    name: "sign-up",
    data() {
        return {
        email: "",
        password_user: "",
        };
    },
    methods: {
        ...mapActions("user", ["CreateUser", "RegisterUser"]),

        CreateAuth() {
            if( this.email !== "" && this.password_user !== ""){
                this.CreateUser({
                    email: this.email,
                    password: this.password_user,
                }),
                this.email = '',
                this.password_user = ''
            }else{
                alert("No deben a ver campos vacios!");
            }
        },
    },
};
</script>