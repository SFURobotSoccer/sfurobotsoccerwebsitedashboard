import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

export const useSendSponsors = () => {
  const contactRef = collection(db, "sponsorsform");

  const sendSponsors = async ({
    name,
    email,
    message,
    company,
    jobTitle,
    sponsorPackage,
  }) => {
    await addDoc(contactRef, {
      name,
      email,
      message,
      company,
      jobTitle,
      sponsorPackage,
      createdAt: serverTimestamp(),
    });
  };

  return {
    sendSponsors,
  };
};
