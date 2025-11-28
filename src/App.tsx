import { motion } from "framer-motion";

const cards = [
  { title: "Fast", text: "Vite builds incredibly fast." },
  { title: "React", text: "Component-based UI development." },
  { title: "Cloudflare", text: "Global edge deployment." },
  { title: "Animation", text: "Framer Motion for smooth UX." },
  { title: "Modern", text: "TS + JSX + ESM + Vite." },
];

export default function App() {
  return (
    <div
      style={{
        padding: "60px 20px",
        textAlign: "center",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          marginBottom: "50px",
          fontSize: "2.6rem",
          fontWeight: 600,
        }}
      >
        🚀 Beautiful Animated Cards
      </motion.h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{
              scale: 1.07,
              rotateX: 5,
              rotateY: -5,
              boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
            }}
            style={{
              background: "#161b22",
              borderRadius: "14px",
              padding: "20px",
              border: "1px solid #30363d",
              cursor: "pointer",
              transition: "box-shadow 0.2s",
            }}
          >
            <h2 style={{ marginTop: 0 }}>{c.title}</h2>
            <p style={{ opacity: 0.8 }}>{c.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
