import {  useToast } from "vue-toast-notification";
const $toast = useToast();

export default {
    displayNotification(){
        $toast.open({
            message: "Turno asignado exitosamente!...",
            type: "success",
            position: "top"
        });
    },
}