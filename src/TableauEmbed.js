import { useEffect } from "react";

export default function TableauEmbed() {
  useEffect(() => {
    const divElement = document.getElementById("viz1768844598167");
    if (!divElement) return;

    const vizElement = divElement.getElementsByTagName("object")[0];
    if (!vizElement) return;

    vizElement.style.width = "100%";
    vizElement.style.height =
      divElement.offsetWidth > 500
        ? `${divElement.offsetWidth}px`
        : "927px";

    const scriptElement = document.createElement("script");
    scriptElement.src =
      "https://public.tableau.com/javascripts/api/viz_v1.js";
    scriptElement.async = true;

    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1768844598167"
      style={{ position: "relative", width: "100%" }}
    >
      <noscript>
        <a
          href="https://public.tableau.com/views/SalesXYZ/Dashboard1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Sales XYZ Dashboard"
            src="https://public.tableau.com/static/images/Sa/SalesXYZ/Dashboard1/1_rss.png"
            style={{ border: "none", width: "100%" }}
          />
        </a>
      </noscript>

      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https://public.tableau.com/" />
        <param name="embed_code_version" value="3" />
        <param
          name="path"
          value="views/SalesXYZ/Dashboard1?:language=en-US&:embed=true"
        />
        <param name="toolbar" value="yes" />
        <param name="language" value="en-US" />
      </object>
    </div>
  );
}
