<template>
    <section>
        <div class="flex-my-turns">
            <user-turns v-for="(turns,index) in my_turn" :key="index"
            :number_turn="turns.number_turn"
            :letter_turn="turns.letter_turn"
            :date_turn="turns.date_turn"
            :active_turn="turns.active_turn"
            />
        </div>
    </section>
</template>

<script>
import "../styles/myturn.css";
import { db } from "../api/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import UserTurns from "../components/UserTurns.vue";

export default {
    name: "turns-user",
    props:{
        uid: String,
    },
    data(){
        return{
            my_turn: []
        }
    },

    components:{
        UserTurns
    },

    methods:{
        async my_turns(){
            const q = query(collection(db, "turns"), where("uid", "==", this.uid));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                this.my_turn.push(doc.data());
            });
        }
    },

    created(){
        this.my_turns();
    }
}
</script>