import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
    addDoc,
    collection,
    deleteDoc, doc, getDoc,
    initializeFirestore,
    onSnapshot, orderBy, query, setDoc, updateDoc, where
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import config from "../config/firebase-creds.js";

const app = initializeApp(config);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });
export {
    addDoc, app, collection, db, deleteDoc, doc, getDoc,
    initializeFirestore,
    onSnapshot, orderBy, query, setDoc, updateDoc, where
};

