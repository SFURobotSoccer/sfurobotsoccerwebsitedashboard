import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

export const useSendContact = () => {
  const contactRef = collection(db, "contact");

  const sendContact = async ({ name, email, message }) => {
    await addDoc(contactRef, {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    });
  };

  return {
    sendContact,
  };
};
