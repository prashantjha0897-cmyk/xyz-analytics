import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      background: "#18837E",
      color: "white",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h2>XYZ</h2>
      <nav>
        <p><Link to="/" style={{ color: "white" }}>Home</Link></p>
        <p><Link to="/sales" style={{ color: "white" }}>Sales</Link></p>
        <p><Link to="/quality" style={{ color: "white" }}>Quality</Link></p>
        <p><Link to="/about" style={{ color: "white" }}>About</Link></p>
      </nav>
    </div>
  );
}
