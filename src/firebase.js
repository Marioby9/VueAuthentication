import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore, doc, collection, query, where, onSnapshot, addDoc, deleteDoc, updateDoc, orderBy, limit, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { getAuth } from "firebase/auth"
 
const app = initializeApp({
    apiKey: "AIzaSyDPHqqYyhuEJ7fIpRksToVYC5zbM1onZ3w",
    authDomain: "flex-fa8c8.firebaseapp.com",
    projectId: "flex-fa8c8",
    storageBucket: "flex-fa8c8.appspot.com",
    messagingSenderId: "824163771541",
    appId: "1:824163771541:web:83622e1bb9f3aada3f679c",
    measurementId: "G-SY23L7GKQC"
})

const analytics = getAnalytics(app)

export const auth = getAuth(app)

const db = getFirestore(app)