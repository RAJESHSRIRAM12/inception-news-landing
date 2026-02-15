import React from "react";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        backgroundColor: "#ffffff",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <img
        src="/Inceptionnews.svg"
        alt="InceptionNews logo"
        style={{ width: "10%", height: "5%" }}
      />

      <h1
        style={{
          fontSize: "32px",
          fontWeight: 600,
          color: "#000",
          margin: 0,
        }}
      >
        InceptionNews
      </h1>
    </header>
  );
}
