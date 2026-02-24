import { useEffect, useState } from "react";

export default function Analyze() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const text = localStorage.getItem("fadfad_text");

    setTimeout(() => {
      const length = text.length;

      let size = "صغيرة 🟢";
      if (length > 150) size = "متوسطة 🟡";
      if (length > 300) size = "كبيرة 🔴";

      setResult({
        summary: "واضح إنك كنت تمر بموقف فيه ضغط ومشاعر كثيرة.",
        size: size,
        solution: "خذ نفس عميق، وراجع الموقف بهدوء، وحاول تتكلم مع الشخص المعني بطريقة أهدأ.",
        advice: "تذكّر: مو كل موقف سيء يعني نهاية اليوم السيء.",
      });

      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return (
      <div style={styles.loading}>
        <h1>جاري حل المشكلة...</h1>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>📌 فهم المشكلة</h2>
      <p>{result.summary}</p>

      <h2>📊 حجم الموضوع</h2>
      <p>{result.size}</p>

      <h2>🛠 الحل المقترح</h2>
      <p>{result.solution}</p>

      <h2>💬 نصيحة</h2>
      <p>{result.advice}</p>
    </div>
  );
}

const styles = {
  loading: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #00ffff, #00ff88)",
    color: "white",
    fontSize: "28px",
  },
  container: {
    padding: "40px",
    fontSize: "20px",
    lineHeight: "2",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
  },
};