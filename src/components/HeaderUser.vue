<template>
<section>
    <select class="form-select-header-user">
        <option>{{  email }}</option>
        <option>Editar perfil</option>
        <option>Cerrar Session</option>
    </select>
</section>
</template>

<script>
import "../styles/header.css";
export default {
    name: "header-user",
    props:{
        uid: String,
        email: String,
        name_full: String,
    },

    data(){
        return{
            emailC: this.email,
            name: this.name_full
        }
    },
}
</script>