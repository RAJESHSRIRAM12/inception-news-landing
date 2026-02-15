export default function JoinTheMission() {
  return (
    <div
      style={{
        background: "#f5f5f5",
        padding: "80px 20px",
        textAlign: "center"
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Join the Mission</h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 40px",
          fontSize: "16px",
          color: "#444",
          lineHeight: "1.6"
        }}
      >
        If you believe news should be more than isolated fragments...
        <br />
        If you believe context matters...
        <br />
        If you believe stories deserve to be understood from their beginning...
        <br />
        <br />
        Then you're already part of this project's future.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {/* GitHub Button */}
        <a
          href="https://github.com/RAJESHSRIRAM12/inception-news"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            border: "2px solid #333",
            borderRadius: "6px",
            textDecoration: "none",
            color: "#333",
            fontWeight: "600"
          }}
        >
          View on GitHub
        </a>

        {/* Learn More Button */}
        <a
          href="https://github.com/RAJESHSRIRAM12/inception-news/discussions/1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            background: "#333",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "600"
          }}
        >
          Discussion
        </a>
      </div>
    </div>
  );
}
