import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCkmnm7eLfase0lUWfuBptzhOWQWULojvg", //import.meta.env.VITE_API_KEY
  authDomain: "chatreact-246db.firebaseapp.com",
  projectId: "chatreact-246db",
  storageBucket: "chatreact-246db.appspot.com",
  messagingSenderId: "919872124646",
  appId: "1:919872124646:web:70d30bf41fffcdcdb0ad27"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()