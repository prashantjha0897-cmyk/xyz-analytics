import TableauEmbed from "../TableauEmbed";
import { xyzColors } from "../theme";
export default function Quality() {
  return (
    <div style={{ width: "100%", minHeight: "800px" }}>
      <h2 style={{ color: xyzColors.primary }}>Quality Dashboard</h2>
      <TableauEmbed url="https://public.tableau.com/app/profile/shubhi.rastogi2788/viz/SalesXYZ/Dashboard1" />
    </div>
  );
}
