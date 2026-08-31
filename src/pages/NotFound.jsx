import React from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO.js";

export default function NotFound() {
  useSEO({ title: "Page Not Found", description: "The page you're looking for doesn't exist or may have moved.", path: "/404", noindex: true });

  return (
    <section className="cdc-section" style={{ textAlign: "center" }}>
      <div className="cdc-shell">
        <span className="cdc-script">Oops</span>
        <h1 style={{ marginTop: ".4rem" }}>Page not found</h1>
        <p style={{ color: "var(--ink-soft)", marginTop: "1rem" }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link to="/" className="cdc-btn cdc-btn-navy" style={{ marginTop: "1.6rem" }}>Back to Home</Link>
      </div>
    </section>
  );
}
