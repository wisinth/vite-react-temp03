import React from "react";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        🚀 Vite + React — Cloudflare Pages Static
      </h1>

      <p style={{ fontSize: "18px", opacity: 0.8 }}>
        โครงสร้างใหม่ทั้งหมด — พร้อมใช้งานบน Cloudflare Pages 100%
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          borderRadius: "10px",
          background: "#f1f1f1",
          display: "inline-block",
        }}
      >
        <p>สร้างใหม่ทั้งหมด 6 ไฟล์:</p>
        <ul style={{ textAlign: "left" }}>
          <li>index.html</li>
          <li>main.tsx</li>
          <li>App.tsx</li>
          <li>vite.config.ts</li>
          <li>tsconfig.json</li>
          <li>package.json</li>
        </ul>
      </div>
    </div>
  );
}
