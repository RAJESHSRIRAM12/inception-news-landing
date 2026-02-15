import React from "react";

export default function Introduction() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Every headline has an origin story</h1>

        <p style={styles.text}>
          Every headline we read is just the final moment of a much longer
          journey. Somewhere behind the breaking alerts and rapid updates lies
          the origin—the first spark that set the entire story in motion.
        </p>

        <p style={styles.beautiful}>
          "But in today’s fast-moving information world, the beginning is buried,
          fragmented, or forgotten."
        </p>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: "60px 20px",
  },
  container: {
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "40px",
    fontWeight: 600,
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    lineHeight: 1.6,
    marginBottom: "16px",
  },


  beautiful : {
   maxWidth: "700px",
        margin: "0 auto",
        fontSize: "20px",
        color: "#333",
        fontStyle: "italic"
   },
};
