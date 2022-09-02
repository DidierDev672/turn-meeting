import { db } from "./firebase"
import { collection, addDoc, updateDoc, doc } from "firebase/firestore"
const UserRef = "dataProfile";

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
    }
}