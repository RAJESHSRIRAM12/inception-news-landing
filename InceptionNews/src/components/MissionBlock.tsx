export default function MissionSection() {
const items = [
  {
    title: "Trace Evolution",
    text: "See how stories develop over time, from their first mention to breaking news."
  },
  {
    title: "Connect Events",
    text: "Understand how different events and reports link together into larger narratives."
  },
  {

    title: "Restore Continuity",
    text: "Give readers the full picture, not just the latest disconnected update."
  }
];


  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>

      {/* Top Mission Message */}
      <h2 style={{ marginBottom: "10px" }}>Our Mission</h2>
      <p style={{ maxWidth: "600px", margin: "0 auto 40px", fontSize: "16px", color: "#444" }}>
        InceptionNews begins with a simple belief: People deserve to understand
        not just the news, but also the path that created it.
      </p>

      {/* Icons Row */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        marginBottom: "40px",
        flexWrap: "wrap"
      }}>
        {items.map((item, index) => (
          <div key={index} style={{ width: "220px", textAlign: "center" }}>
            <h3 style={{ margin: "0 0 10px 0" }}>{item.title}</h3>
            <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Quote */}
      <p style={{
        maxWidth: "700px",
        margin: "0 auto",
        fontSize: "16px",
        color: "#333",
        fontStyle: "italic"
      }}>
        "News shouldn't feel like disconnected fragments. It should feel like a story —
        with a beginning, a middle, and an end."
      </p>
    </div>
  );
}
