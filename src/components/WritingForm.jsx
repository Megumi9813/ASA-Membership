import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useUserContext } from "../contexts/userContext";

function WritingForm() {
  const { user } = useUserContext();
  const [answer, setAnswer] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const answerSubmitHandler = async () => {
    const collectionRef = collection(db, 'answers');
    const payload = {uid: user.uid, value: answer};
    const docRef = await addDoc(collectionRef, payload);
    console.log("The new ID is: " + docRef.id);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        type="text"
        required
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
      />
      <button onClick={answerSubmitHandler}>Submit</button>
    </form>
  );
}

export default WritingForm;
