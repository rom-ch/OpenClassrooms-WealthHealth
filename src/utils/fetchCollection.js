import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const fetchCollection = async collectionName => {
  const employeesCollection = collection(db, collectionName);

  try {
    const data = await getDocs(employeesCollection);
    const fetchedCollection = data.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));
    const filteredCollection = fetchedCollection.sort((a, b) => {
      const valueA = a.name;
      const valueB = b.name;
      return valueA.localeCompare(valueB);
    });
    return filteredCollection;
  } catch (err) {
    console.log(err);
  }
};
