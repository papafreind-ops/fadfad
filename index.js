import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>فضفض</h1>
      <button style={styles.button} onClick={() => router.push("/write")}>
        فضفض
      </button>
      <p style={styles.subtitle}>
        اكتب اللي في خاطرك… وخل علينا الباقي
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #00ffff, #00ff88)",
    fontFamily: "Tajawal, sans-serif",
  },
  title: {
    fontSize: "64px",
    color: "white",
    marginBottom: "30px",
  },
  button: {
    fontSize: "28px",
    padding: "20px 60px",
    borderRadius: "50px",
    border: "none",
    backgroundColor: "white",
    color: "#00bcd4",
    cursor: "pointer",
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: "20px",
    color: "white",
    fontSize: "18px",
  },
};