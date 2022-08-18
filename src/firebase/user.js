import { authFirebase, authGoogle, bdFirestore } from "./init";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

/**
 * Gère la connection d'un utilisateur
 */
export function connectUser() {
  signInWithPopup(authFirebase, authGoogle);
}

/**
 * Surveille l'état de la connection de l'utilisateur et change l'état de la propriété user si nécessaire
 * @param {function} setUser
 */
export function monitorUserConnection(setUser) {
  onAuthStateChanged(authFirebase, (user) => {
    if (user) {
      saveUser(user);
    }
    setUser(user);
  });
}

/**
 * Créer une nouvelle collection user pour chaque nouvel utilisateur
 * @param {object} user
 */
function saveUser(user) {
  setDoc(doc(bdFirestore, "users", user.uid), {
    name: user.displayName,
    email: user.email,
    avatar: user.photoURL,
  });
}

/**
 * Termine une session utilisateur
 */
export function disconnectUser() {
  authFirebase.signOut();
}
