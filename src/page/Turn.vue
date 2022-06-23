<template>
    <div class="container">
        <form class="flex-turn">
        <div class="grid-turn">
            <div class="flex-item">
            <span>Facturacion : A</span>
            <input type="checkbox" class="check-box" />
            </div>
            <div class="flex-item">
            <span>Anexos : B</span>
            <input type="checkbox" class="check-box" />
            </div>
            <div class="flex-item">
            <span>Historia Clinica : C</span>
            <input type="checkbox" class="check-box" />
            </div>
        </div>
        <div class="turn-item">
            <label>N° Identificacion / "Ceduala o Tarjeta de identidad"</label>
            <input
            type="text"
            class="text-input"
            placeholder="Numero de identificacion o 'Cedula'"
            />
        </div>
        <div class="turn-item">
            <label>Numero telefono</label>
            <input
            type="text"
            class="text-input"
            placeholder="Numero de telefono"
            />
        </div>
        <div class="turn-item">
            <label>Correo electronico</label>
            <input
            type="text"
            class="text-input"
            placeholder="example@example.com"
            />
        </div>
        <div class="turn-item">
            <button type="button" class="btn-ask">Solicitar</button>
        </div>
        </form>
    </div>
    </template>

    <script>
    import "../styles/turn.css";
    export default {
    name: "turn",
    };
    </script>