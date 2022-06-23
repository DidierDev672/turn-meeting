<template>
<div class="container">
    <nav class="box-navbar">
        <ul class="list-box">
            <li class="list-item">
                <router-link to="/" class="list-link">Turn Meeting</router-link>
            </li>
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
                <router-link to="/" class="list-link">Sala espera</router-link>
            </li>
        </ul>
        <ul class="list-box-right">
            <li class="list-item">
                <router-link to="/sign-in" class="list-link">Sign In</router-link>
            </li>
            <li class="list-item">
                <router-link to="/sign-up" class="list-link">Sign Up</router-link>
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
import "../styles/header.css"
export default {
    name: 'Header'
}
</script>