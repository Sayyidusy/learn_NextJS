import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from './init';

const firestore = getFirestore(app);


export async function retrieveData(collectionName: string) {
//   return getFirestore(app); //bagian return ini untuk mengembalikan nilai firestore yang sudah di inisialisasi
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}