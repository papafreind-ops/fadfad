import { useState } from "react";
import { useRouter } from "next/router";

export default function Write() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!text.trim()) return;
    localStorage.setItem("fadfad_text", text);
    router.push("/analyze");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>فضفض براحتك</h2>
      <textarea
        style={styles.textarea}
        placeholder="وش صار معك اليوم؟"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button style={styles.button} onClick={handleSubmit}>
        انتهيت
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#f9ffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#00bcd4",
  },
  textarea: {
    width: "80%",
    height: "200px",
    borderRadius: "20px",
    padding: "20px",
    fontSize: "18px",
    border: "2px solid #00ffff",
    outline: "none",
  },
  button: {
    marginTop: "20px",
    padding: "15px 40px",
    fontSize: "20px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#00ffff",
    color: "white",
    cursor: "pointer",
  },
};