<template>
    <div class="container py-3">
        <div class="box-card-edit-profile">
            <form>
                <div class="flex-form-edit-profile">
                    <div class="item-form-edit-profile">
                        <label class="title-edit-profile">Edit Profile</label>
                        <label class="title-name-edit-profile">{{ nameuser }}</label>
                    </div>
                    <div class="item-form-edit-profile">
                        <label for="nameuser">Name full</label>
                        <input type="text" class="text-campo"
                        id="namefull" v-model="nameuser"
                        required/>
                    </div>
                    <div class="item-form-edit-profile">
                        <label for="phone">Phone</label>
                        <input type="tel" class="text-campo"
                        id="phone" v-model="phone"
                        required/>
                    </div>
                    <div class="item-form-edit-profile">
                        <label for="email">Email</label>
                        <input type="email" class="text-campo"
                        id="email" v-model="email"
                        required/>
                    </div>
                    <div class="item-form-edit-profile">
                        <label for="pwd">Password</label>
                        <input type="password" class="text-campo"
                        id="pwd" v-model="pwd"
                        required/>
                    </div>
                    <div class="item-form-edit-profile">
                        <button type="button" class="btn-profile" @click="EditProfile()"> Edit Profile </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import "../styles/editprofile.css";

import { auth, db } from "../api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where  } from "firebase/firestore";
import {  mapActions } from "vuex";
export default {
    name: "edit-profile",
    data(){
        return{
            uid: "",
            nameuser:"",
            email: "",
            phone: "",
            pwd: "",
            id: ""
        }
    },
    methods:{
        ...mapActions("user",[
            "editProfile",
            "EditProfileFirestore"
        ]),

        async DataProfile(uid){
            uid = this.uid;
            if(uid !== ""){
                const q = query(collection(db, "dataProfile"), where ("uid", "==", uid));

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    this.id = doc.id;
                    this.phone = doc.data().phone;
                });
            }
        },

        EditProfile(){
            if(this.uid !== "" && this.nameuser !== "" && this.email !== "" && this.phone !== "" && this.pwd !== ""){
                    this.editProfile({
                        email: this.email,
                        displayName: this.nameuser,
                        password: this.pwd
                    });

                    this.EditProfileFirestore({
                        uid: this.uid,
                        nameUser: this.nameuser,
                        phone:this.phone,
                        email:this.email,
                        password:this.pwd,
                        id:this.id,
                    })
            }else{
                alert("Debe llenar todos los campos!");
            }
        }
    },
    created(){
        onAuthStateChanged(auth, (user) => {
            if(user){
                this.uid = user.uid;
                this.nameuser = user.displayName;
                this.email = user.email;
                this.phone = user.phone;
            }

            this.DataProfile(this.uid );
        });
    }
}
</script>