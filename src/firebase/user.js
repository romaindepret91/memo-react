import { authFirebase, authGoogle, bdFirestore } from "./init";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export function connectUser() {
  signInWithPopup(authFirebase, authGoogle);
}

export function monitorUserConnection(setUser) {
  onAuthStateChanged(authFirebase, (user) => {
    if (user) {
      saveUser(user);
    }
    setUser(user);
  });
}

function saveUser(user) {
  setDoc(doc(bdFirestore, "users", user.uid), {
    name: user.displayName,
    email: user.email,
    avatar: user.photoURL,
  });
}

export function disconnectUser() {
  authFirebase.signOut();
}
