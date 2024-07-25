import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

export const addDataToFirestore = async (data, collectionName) => {
  const dataCollection = collection(db, collectionName);

  const promises = data.map(el => {
    addDoc(dataCollection, el);
  });

  try {
    await Promise.all(promises);
    console.log("Data have been added successfully!");
  } catch (err) {
    console.error("Error adding data", err);
  }
};
