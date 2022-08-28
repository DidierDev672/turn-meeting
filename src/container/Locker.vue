<template>
    <div class="container py-3">
        <div class="box-card-locker">
            <form>
                <div class="flex-form-locker">
                    <div class="flex-item-locker">
                        <label>Seleccionar taquilla</label>
                        <select class="select-box">
                            <option default> Seleccionar taquilla </option>
                            <option value="billing">Facturacion</option>
                            <option value="annex">Anexos</option>
                            <option value="historyclinic">Historia clinica</option>
                        </select>
                    </div>
                <div class="flex-item-locker">
                    <label for="email">Email</label>
                    <input type="email" id="email"  class="text-campo"
                    placeholder="example@example.com"
                    required />
                </div>
                <div class="flex-item-locker">
                    <label for="phone">Telefono</label>
                    <input type="tel" id="phone" class="text-campo"
                    placeholder="000-000-0000"
                    required/>
                </div>
                <div class="flex-item-locker">
                    <button type="button" class="btn-locker">Solicitar</button>
                </div>
            </div>
            </form>
        </div>
    </div>
</template>

<script>
import "../styles/locker.css";
export default {
    name:"locker"
}
</script>