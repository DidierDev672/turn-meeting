<template>
<form class="grid-turn">
    <div class="form-item">
        <label>Numero de identificacion o "Cedula"</label>
        <input type="text" class="text-input" placeholder="Cedula O 'N° identificacion'" />
    </div>
    <div class="form-item">
        <label>Telefono</label>
        <input type="text" class="text-input" placeholder="Telefono" />
    </div>
    <div class="form-item">
        <label>Correo electronico</label>
        <input type="email" class="text-input" placeholder="example@example.com" />
    </div>
</form>
<div class="item-button">
    <button type="button" class="btn-turn">Solicitar</button>
</div>
</template>

<script>
import "../styles/basicturn.css"
export default {
    name: 'basic-turn'
}
</script>