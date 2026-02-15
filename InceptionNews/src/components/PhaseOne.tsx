export default function PhaseOne() {
  return (
    <div
      style={{
        background: "#ffffff",      // white color
        padding: "60px 20px",
        textAlign: "center"
      }}
    >
      {/* Phase Label */}
      <div
        style={{
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "1.5px",
          color: "#666",
          marginBottom: "8px"
        }}
      >
        PHASE 1
      </div>

      {/* Title */}
      <h2 style={{ marginBottom: "16px" }}>Research & Exploration</h2>

      {/* Description */}
      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "16px",
          color: "#444",
          lineHeight: "1.6"
        }}
      >
        InceptionNews is currently a concept. There is no working prototype yet—only a
        vision, a direction, and a mission worth building. This project is in the idea
        stage, but the mission is already clear. We're researching, planning, and
        preparing to build something meaningful.
      </p>
    </div>
  );
}
