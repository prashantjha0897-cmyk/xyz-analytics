import { xyzColors } from "../theme";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={{ alignSelf: "center" }}>
        <Logo size={56} />
      </div>
      {/* Header */}
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ color: "#1b7f7a", marginBottom: "10px" }}>
          XYZ Analytics Portal
        </h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Your centralized platform for monitoring business performance and
          making data-driven decisions.
        </p>
      </div>

      {/* Intro Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3 style={cardTitle}>📈 Sales Analytics</h3>
          <p>
            Track monthly sales trends, revenue growth, and outlet-level
            performance with interactive dashboards.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitle}>✅ Quality Metrics</h3>
          <p>
            Monitor quality indicators, compliance metrics, and improvement
            areas to ensure consistent standards.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitle}>📊 Unified Insights</h3>
          <p>
            Bring sales and quality data together to uncover insights that
            support smarter business decisions.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div style={{ marginTop: "40px", color: "#777" }}>
        <p>
          Use the navigation on the left to explore dashboards and dive deeper
          into your analytics.
        </p>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#ffffff",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const cardTitle = {
  color: "#1b7f7a",
  marginBottom: "10px",
};
