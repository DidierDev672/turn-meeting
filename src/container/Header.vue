<template>
<div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Turn-meeting</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page"  href="#"> My turn's </a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/turns">Turn's</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="">Room await</a>
                    </li>
                </ul>
                <template v-if="uid !== ''">
                    <form class="d-flex">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-user"></i>
                                </a>
                                <ul  class="dropdown-menu">
                                    <li><span class="dropdown-item"> <i class="fas fa-at"></i> {{ email }}</span></li>
                                    <li><span class="dropdown-item"><i class="fas fa-user"></i> {{ nameuser }}</span></li>
                                    <li><router-link class="dropdown-item btn-profile" to="/edit-profile"> Edit profile</router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </form>
                </template>
                <template v-else>
                    <form class="d-flex">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" to="/sign-in"> Sign In </router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Sign Up</a>
                            </li>
                        </ul>
                    </form>
                </template>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import "../styles/header.css";
import { auth } from "../api/firebase";
import {  onAuthStateChanged } from "firebase/auth";
export default {
    name: "header",
    data(){
        return{
            uid: "",
            nameuser: "",
            email: "",
        }
    },
    created(){
        onAuthStateChanged(auth, (user) => {
            if(user){
                const uid = user.uid;
                this.uid = uid;
                this.email = user.email;
                this.nameuser = user.displayName;
            }else{
                console.log("Error en watch on user Firebase");
            }
        });
    }
}
</script>r