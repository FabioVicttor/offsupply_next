import React from "react";

import IconLogoBranco from "../../../assets/icons/IconLogoBranco";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#10002b",
        color: "white",
        width: "100%",
        height: "200px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconLogoBranco />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Copyright © 2020 | Fabio Victor - Bahhiia
      </div>
    </div>
  );
}
