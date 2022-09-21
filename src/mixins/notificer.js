import { useToast } from "vue-toast-notification";

const $toast = useToast();

export default {
    data(){
        return{
            mes: "Hello World"
        }
    },
    methods:{
        start: function(){
            $toast.open({
                message: "Turno asignado exitosamente!...",
                type: "success",
                position: "top"
            })
        }
    }
}