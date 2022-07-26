<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <h2 class="navbar-brand">Turn meeting</h2>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" to="/turn">Turnos</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" to="/my-turn"
                >Mis turnos</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" to="/room-await"
                >Sala espera</router-link
                >
            </li>
            </ul>
            <form class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <template v-if="uid !== ''">
                <li class="nav-item dropdown">
                    <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    {{ email }}
                    </a>
                    <ul class="dropdown-menu">
                    <li class="dropdown-item">Editar perfil</li>
                    <li class="dropdown-item">Cerrar Session</li>
                    </ul>
                </li>
                </template>
                <template v-else>
                <li class="nav-item">
                    <router-link class="nav-link active" to="/sign-in"
                    >Sign In</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" to="/sign-up"
                    >Sign Up</router-link
                    >
                </li>
                </template>
            </ul>
            </form>
        </div>
        </div>
    </nav>
    </template>

<script>
import "../styles/header.css";
import HeaderUser from "../components/HeaderUser.vue";
import { auth } from "../api/firebase";
import { onAuthStateChanged } from "firebase/auth";
export default {
name: "Header",
    data() {
        return {
        uid: "",
        email: "",
        name_full: "",
        };
    },

    components: {
        HeaderUser,
    },

    created() {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            (this.uid = user.uid),
            (this.email = user.email),
            (this.name_full = user.name);
        }
        });
    },
};
</script>