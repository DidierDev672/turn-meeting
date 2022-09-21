<template>
    <div class="container py-3">
        <div class="box-card-locker">
            <form>
                <div class="flex-form-locker">
                    <div class="flex-item-locker">
                        <label>Seleccionar taquilla</label>
                        <select class="select-box" v-model="letter_turn">
                            <option value="billing">Facturacion</option>
                            <option value="annex">Anexos</option>
                            <option value="historyclinic">Historia clinica</option>
                        </select>
                    </div>
                <div class="flex-item-locker">
                    <label for="email">Email</label>
                    <input type="email" id="email"  class="text-campo"
                    placeholder="example@example.com"
                    required v-model="email" />
                </div>
                <div class="flex-item-locker">
                    <label for="phone">Telefono</label>
                    <input type="tel" id="phone" class="text-campo"
                    placeholder="000-000-0000"
                    required v-model="phone"/>
                </div>
                <div class="flex-item-locker">
                    <button type="button" class="btn-locker" id="liveAlertBtn" @click="Assignturns()">Solicitar</button>
                </div>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
import "../styles/locker.css";
import { auth} from "../api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { mapActions } from "vuex";
export default {
    name:"locker",
    data(){
        return{
            uid: "",
            letter_turn: "",
            email: "",
            phone: "",
            number_turns: []
        }
    },
    methods:{
        ...mapActions("turn", [
            "assignTurns",
        ]),

        Assignturns(){
            if(this.letter_turn !=="" && this.email !== "" && this.phone !== ""){
                this.assignTurns({
                    uid: this.uid,
                    email: this.email,
                    phone: this.phone,
                    letter_turn:this.letter_turn,
                });

                this.email = "";
                this.phone = "";
            }else{
                alert("Debe llenar todos los campos!");
            }
        }
    },

    created(){
        onAuthStateChanged(auth, (user) => {
            if(user){
                this.uid = user.uid;
            }
        });
    }
}
</script>