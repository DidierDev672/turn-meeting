<template>
    <section>
        <div class="header-await-ticket">
            <label class="title-await-ticket">Turnos en espera</label>
        </div>
        <div class="flex-await-ticket">
            <div class="item-flex-await-ticket">
                <span class="sub-title-await-ticket">Facturacion</span>
                <div class="card-item-await-ticket">
                    <div class="flex-billing">
                        <list-billing v-for="(list,index) in BillingList" :key="index"
                        :number_turn="list.number_turn"/>
                    </div>
                </div>
            </div>
            <div class="item-flex-await-ticket">
                <span class="sub-title-await-ticket">Anexos</span>
                <div class="card-item-await-ticket">
                    <div class="flex-annex">
                        <list-annex v-for="(list,index) in AnnexList" :key="index"
                        :number_turn="list.number_turn"/>
                    </div>
                </div>
            </div>
            <div class="item-flex-await-ticket">
                <span class="sub-title-await-ticket">Historia Clinica</span>
                <div class="card-item-await-ticket">
                    <div class="flex-history-clinic">
                        <list-history-clinic v-for="(list,index) in HistoryClinicList" :key="index"
                        :number_turn="list.number_turn"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import "../styles/awaitroom.css";
import { mapGetters } from "vuex";
import ListBilling from "../components/ListBilling.vue";
import ListAnnex from "../components/ListAnnex.vue";
import ListHistoryClinic from "../components/ListHistoryClinic.vue";
export default {
    name: "await-ticket",
    data(){
        return{
            letter_billing: "A",
            letter_annex: "B",
            letter_history: "C"
        }
    },
    components:{
        ListBilling,
        ListAnnex,
        ListHistoryClinic
    },
    computed:{
        ...mapGetters("turn",[
            "getListByBilling",
            "getListByAnnex",
            "getListByHistoyClinic"
        ]),

        BillingList(){
            return this.getListByBilling(this.letter_billing);
        },

        AnnexList(){
            return this.getListByAnnex(this.letter_annex);
        },

        HistoryClinicList(){
            return this.getListByHistoyClinic(this.letter_history);
        }
    }
}
</script>