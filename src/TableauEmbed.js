import { useEffect } from "react";

export default function TableauEmbed({ url }) {
  useEffect(() => {
    const divElement = document.getElementById("viz1768844598167");
    const vizElement = divElement.getElementsByTagName("object")[0];

    if (divElement.offsetWidth > 800) {
      vizElement.style.width = "100%";
      vizElement.style.height = divElement.offsetWidth * 1 + "px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = "100%";
      vizElement.style.height = divElement.offsetWidth *1 + "px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.height = "927px";
    }

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1768844598167"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="#">
          <img
            alt="Dashboard 1"
            src="https://public.tableau.com/static/images/Sa/SalesXYZ/Dashboard1/1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https://public.tableau.com/" />
        <param name="embed_code_version" value="3" />
        <param
          name="path"
          value="views/SalesXYZ/Dashboard1?:language=en-US&:embed=true&:sid=&:redirect=auth"
        />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/Sa/SalesXYZ/Dashboard1/1.png"
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
    </div>
  );
}
