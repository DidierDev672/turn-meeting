import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import settings from "./settings"

const firebaseApp = initializeApp(settings)
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)

export default firebaseApp