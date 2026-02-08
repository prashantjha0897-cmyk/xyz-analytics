import { xyzColors } from "../theme";

export default function About() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: xyzColors.primary, marginBottom: "20px" }}>
        About This Project
      </h1>

      {/* Project Overview */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ color: xyzColors.primary }}>Project Overview</h3>
        <p style={{ color: xyzColors.textSecondary }}>
          The XYZ Analytics Portal is designed to provide a unified and
          interactive view of key business metrics, enabling stakeholders to
          monitor performance, identify trends, and make informed decisions.
          The application integrates visual analytics with a clean and
          intuitive user interface.
        </p>
      </section>

      {/* Data Sources */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ color: xyzColors.primary }}>Data Sources</h3>
        <p style={{ color: xyzColors.textSecondary }}>
          The dashboards are powered by structured sales and quality datasets,
          including monthly revenue figures, outlet-level performance data,
          and quality assessment metrics. Data is sourced from internal
          reporting systems and processed for visualization using Tableau
          Public.
        </p>
      </section>

      {/* Assumptions */}
      <section>
        <h3 style={{ color: xyzColors.primary }}>Assumptions</h3>
        <ul style={{ color: xyzColors.textSecondary, paddingLeft: "20px" }}>
          <li>
            Data is assumed to be accurate, complete, and up to date at the
            time of visualization.
          </li>
          <li>
            Missing or inconsistent records have been excluded from analysis
            where necessary.
          </li>
          <li>
            Sales figures are aggregated at a monthly level for trend analysis.
          </li>
          <li>
            All monetary values are represented in INR unless stated otherwise.
          </li>
        </ul>
      </section>
    </div>
  );
}
