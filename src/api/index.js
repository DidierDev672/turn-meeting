import { db } from "./firebase"
import { collection, addDoc, updateDoc, doc, getDocs} from "firebase/firestore"

// Reference of the collection firestore
const UserRef = "dataProfile";
const TurnsRef = "turns";

export default {
    async EditProfile({ uid, nameUser, phone,email, password }){
        const docRef = await addDoc(collection(db, UserRef), {
            uid: uid,
            nameUser: nameUser,
            phone: phone,
            email: email,
            password: password
        });

        return docRef.data();
    },

    async UpdateEditProfile({ id, nameUser, email, phone }){
        const ProfileRef = doc(db, UserRef, id);

        await updateDoc(ProfileRef, {
            "nameUser": nameUser,
            "email": email,
            "phone": phone
        });
    },
    AssignTurn({uid, number_turn, letter_turn,date_turn, code_turn, email, phone}){
        const turnsRef = addDoc(collection(db, TurnsRef),{
            uid: uid,
            number_turn: number_turn,
            letter_turn: letter_turn,
            date_turn: date_turn,
            code_turn: code_turn,
            email: email,
            phone: phone,
            status_turn:false,
            active_turn:false,
        });

        return turnsRef;
    },
}