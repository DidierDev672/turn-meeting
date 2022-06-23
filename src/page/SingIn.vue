<template>
<div class="container">
    <div class="box-sign">
        <form class="flex-sign">
            <div class="sign-item">
                <label>Correo electronico</label>
                <input type="text" class="text-input" placeholder="example@example.com" />
            </div>
            <div class="sign-item">
                <label>Password</label>
                <input type="password" class="text-input" placeholder="***********" />
            </div>
            <div class="sign-item">
                <router-link to="/sign-up" class="text-link">Registrar usuario</router-link>
            </div>
            <div class="sign-item">
                <button type="button" class="btn-sign-in">Inciar Sesion</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import "../styles/SignIn.css"
export default {
    name: "sign-in"
}
</script>