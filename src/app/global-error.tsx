"use client";

/**
 * Last-resort boundary — replaces the root layout, so it must render its own
 * <html>/<body> and use inline styles (the global stylesheet isn't loaded here).
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
          background: "#071629",
          color: "#eef2f0",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div>
          <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Something went wrong</h1>
          <p style={{ color: "#9ba6ae", marginTop: "0.75rem" }}>
            A critical error occurred. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: "1.5rem",
              padding: "11px 18px",
              borderRadius: 8,
              border: 0,
              background: "#2fb98c",
              color: "#071629",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
