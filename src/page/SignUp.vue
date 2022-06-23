<template>
<div class="container">
    <form class="box-sign-up">
        <div class="grid-sign-up">
            <div class="sign-item">
                <label>Nombre completo</label>
                <input type="text" class="text-input" placeholder="Nombre completo" />
            </div>
            <div class="sign-item">
                <label>N° Identificacion o "Cedula"</label>
                <input type="text" class="text-input" placeholder="N° Identificacion o 'Cedula'" />
            </div>
            <div class="sign-item">
                <label>Telefono</label>
                <input type="text" class="text-input" placeholder="Telefono" />
            </div>
            <div class="sign-item">
                <label>Correo electronico</label>
                <input type="text" class="text-input" placeholder="example@example.com" />
            </div>
        </div>
        <div class="item-button">
            <button type="button" class="btn-sign-up">Registrar</button>
        </div>
    </form>
</div>
</template>

<script>
import "../styles/signup.css"
export default {
    name: 'sign-up'
}
</script>