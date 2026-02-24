import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

export default function Admin() {
  const [vents, setVents] = useState([]);

  useEffect(() => {
    const fetchVents = async () => {
      const querySnapshot = await getDocs(collection(db, "vents"));
      setVents(querySnapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    fetchVents();
  }, []);

  const handleReply = async (ventId) => {
    const reply = prompt("اكتب ردك للمستخدم / Write your reply:");
    if (!reply) return;
    await updateDoc(doc(db, "vents", ventId), { adminReply: reply });
    alert("تم إرسال الرد!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>لوحة التحكم | Admin Dashboard</h1>
      <ul>
        {vents.map(v => (
          <li key={v.id} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "0.5rem" }}>
            <strong>{v.mood}</strong> - {v.text}
            {v.aiAnalysis && <p>{v.aiAnalysis}</p>}
            {v.saved && <button onClick={() => handleReply(v.id)}>رد للمستخدم / Reply</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}