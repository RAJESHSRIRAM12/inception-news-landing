export default function OpenSource() {
  return (
    <div style={{ background: "#f5f5f5",textAlign: "center", padding: "60px 20px" }}>

      {/* Title */}
      <h2 style={{ marginBottom: "16px" }}>Why Open Source</h2>

      {/* Main Text */}
      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 40px",
          fontSize: "16px",
          color: "#444",
          lineHeight: "1.6"
        }}
      >
        Transparency is at the heart of our mission. By making our tools open source,
        we invite developers, journalists, researchers, and readers to collaborate
        on a system that strengthens public understanding. Open source ensures that
        the logic behind every connection is visible, trustworthy, and shaped by the
        community.
      </p>

      {/* Two Principles */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >
        {/* Transparent by Design */}
        <div style={{ width: "260px", textAlign: "center" }}>
          <h3 style={{ marginBottom: "10px" }}>Transparent by Design</h3>
          <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>
            Every connection, every trace, every link is visible.
          </p>
        </div>

        {/* Community Driven */}
        <div style={{ width: "260px", textAlign: "center" }}>
          <h3 style={{ marginBottom: "10px" }}>Community Driven</h3>
          <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>
            Built by people who believe in informed citizenship and quality journalism.
          </p>
        </div>
      </div>
    </div>
  );
}
