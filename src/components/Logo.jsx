export default function Logo({ size = 48 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px",justifySelf: "anchor-center" }}>
      <img
        src="/xyz_logo.png"
        alt="XYZ Logo"
        style={{ height: size }}
      />
    </div>
  );
}
