<template>
    <div class="container py-3">
        <div class="box-sign-in">
            <form>
                <div class="flex-form-sign-in">
                    <div class="flex-item-sign-in">
                        <label class="title-sign-in">Sign In</label>
                    </div>
                    <div class="flex-item-sign-in">
                        <label for="email">Correo electronico</label>
                        <input type="email" id="email"
                        class="text-campo" placeholder="example@example.com"
                        required/>
                    </div>
                    <div class="flex-item-sign-in">
                        <label for="pwd">Contraseña</label>
                        <input type="password" id="pwd"
                        class="text-campo" placeholder="*******************"
                        required/>
                    </div>
                    <div class="flex-item-sign-in">
                        <router-link class="text-link" to="/sign-up">Sign Up</router-link>
                    </div>
                    <div class="flex-item-sign-in">
                        <button type="button" class="btn-sign-in">Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import "../styles/SignIn.css";
export default {
    name:"sign-in"
}
</script>