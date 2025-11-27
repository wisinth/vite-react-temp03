import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.backgroundGradient} />

      <div style={styles.card}>
        <h1 style={styles.title}>✨ Welcome to Vite + React</h1>

        <p style={styles.subtitle}>
          Static Site • Cloudflare Pages • Smooth Animation
        </p>

        <div style={styles.buttonContainer}>
          <a href="https://github.com/wisinth/vite-react-temp03" target="_blank" style={styles.button}>
            View Repo
          </a>
        </div>
      </div>

      <div style={styles.floatingCircle1} />
      <div style={styles.floatingCircle2} />
    </div>
  );
}

//
// ⭐ CSS-in-JS แบบง่าย — เคลื่อนไหวได้
//
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    fontFamily: "Segoe UI, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f0f0f",
  },

  backgroundGradient: {
    position: "absolute",
    width: "150%",
    height: "150%",
    background:
      "radial-gradient(circle at 30% 30%, #4a7cff, transparent 70%), radial-gradient(circle at 70% 70%, #ff3ca6, transparent 70%)",
    animation: "rotateBg 20s linear infinite",
    zIndex: 0,
  },

  card: {
    zIndex: 10,
    padding: "50px 70px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "center",
    boxShadow: "0 0 40px rgba(0,0,0,0.4)",
    border: "1px solid rgba(255,255,255,0.12)",
  },

  title: {
    fontSize: "42px",
    marginBottom: "20px",
    fontWeight: "700",
    animation: "fadeIn 1.5s ease",
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.85,
    marginBottom: "30px",
    animation: "fadeIn 2s ease",
  },

  buttonContainer: {
    marginTop: "10px",
  },

  button: {
    padding: "12px 30px",
    fontSize: "18px",
    textDecoration: "none",
    borderRadius: "8px",
    color: "#fff",
    background: "linear-gradient(90deg, #4a7cff, #9353ff)",
    transition: "0.3s",
  },

  floatingCircle1: {
    position: "absolute",
    top: "15%",
    left: "10%",
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.06)",
    animation: "float1 6s ease-in-out infinite",
  },

  floatingCircle2: {
    position: "absolute",
    bottom: "10%",
    right: "15%",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.04)",
    animation: "float2 7s ease-in-out infinite",
  },
};
