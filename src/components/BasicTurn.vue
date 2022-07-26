<template>
<form class="flex-turn-locker" method="post">
    <div class="form-item">
        <label>Seleccionar taquilla</label>
        <select class="select-locker">
            <option value="billing">Facturación</option>
            <option value="annex">Anexos</option>
            <option value="historyClinic">Historia Clinica</option>
        </select>
    </div>
    <div class="form-item">
        <label for="identification">Numero de identificacion o "Cedula"</label>
        <input type="text" id="identification" class="text-input" placeholder="Cedula O 'N° identificacion'" />
    </div>
    <div class="form-item">
        <label for="phone">Telefono</label>
        <input type="tel" id="phone" class="text-input" placeholder="Telefono" />
    </div>
    <div class="form-item">
        <label for="email">Correo electronico</label>
        <input type="email" id="email" class="text-input" placeholder="example@example.com" />
    </div>
    <div class="item-button">
        <button type="button" class="btn-turn">Solicitar</button>
    </div>
</form>
</template>

<script>
import "../styles/basicturn.css"
export default {
    name: 'basic-turn'
}
</script>