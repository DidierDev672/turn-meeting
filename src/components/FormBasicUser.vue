<template>
<div>
    <div class="form-item-locker">
        <label>N° Identificacion O "Cedula"</label>
        <input type="text" class="text-input" placeholder="N° Identificacion O 'Cedula'" />
    </div>
    <div class="form-item-locker">
        <label>N° Telefono</label>
        <input type="text" class="text-input" placeholder="N° Telefono"/>
    </div>
    <div class="form-item-locker">
        <label>Correo Electronico</label>
        <input type="email" class="text-input" placeholder="example@example.com"/>
    </div>
    <div class="item-button-locker">
        <button type="button">Solicitar</button>
    </div>
</div>
</template>

<script>
import "../styles/FormBasicUser.css"
export default {
    name: 'basic-locker'
}
</script>