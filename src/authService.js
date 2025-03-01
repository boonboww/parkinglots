import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

export const getUserRole = async () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          resolve(userSnap.data().role); // Trả về vai trò của người dùng
        } else {
          resolve(null);
        }
      } else {
        resolve(null);
      }
    });
  });
};
