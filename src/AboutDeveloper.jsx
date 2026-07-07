import React from "react";

function AboutDeveloper() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Developer"
        style={{
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />

      <h1>About Developer</h1>

      <h2>Name</h2>
      <p>Sony Reddy</p>

      <h2>Skills</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Git & GitHub</li>
      </ul>

      <h2>Why I Joined</h2>
      <p>
        I joined this internship to improve my web development skills, gain
        practical experience by working on real-world projects, collaborate with
        experienced developers, and learn industry best practices in React,
        Node.js, and full-stack development.
      </p>
    </div>
  );
}

export default AboutDeveloper;
