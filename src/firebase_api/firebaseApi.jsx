import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore";
import { app } from "../lib/firebase";

// const db = getFirestore(firebaseApp);
const db = getFirestore(app);

const path = "stats_data";
const colRef = doc(collection(db, path));

class firebaseApi {
  async setData(review_data) {
    const data = await setDoc(colRef, review_data);

    return data;
  }
}
export const firebaseMethods = new firebaseApi();
