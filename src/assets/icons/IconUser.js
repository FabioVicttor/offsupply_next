import React from "react";

export default function IconUser() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 803.52 439.73"
      height="75"
      width="75"
    >
      <defs>
        <filter
          id="dropshadow"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="5" dy="5" result="offsetblur" />
          <feOffset dx="-5" dy="-5" result="offsetblur" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <title>OFFSupply</title>
      <g className="cls-1" isolation="isolate">
        <g id="Layer_1" data-name="Layer 1">
          <path
            className="cls-2"
            fill="#563a96"
            d="M234.18,366.87c22.33,51.67,109.3,71.58,202.24,44.77S586.67,347,581.27,282.55c-1.79-21.34-32.2-83.57-55.45-142C508.13,96,501.23,53.18,475.42,35.18,446,14.67,373.45,87.46,349,111.43,279.93,179.15,188.52,261.2,234.18,366.87Z"
          />
          <path
            className="cls-3"
            fill="#fff"
            d="M483.05,261.35c0,21.08-36.27,104-81.16,104s-81.42-83-81.42-104,36.39-38.16,81.29-38.16S483.05,240.28,483.05,261.35Z"
          />
          <image
            className="cls-4"
            width="546"
            opacity="0.75"
            height="546"
            transform="translate(334.84 138.72) scale(0.24)"
            mix-blend-mode="multiply"
          />
          <circle
            filter="url(#dropshadow)"
            className="cls-3"
            fill="#fff"
            cx="400.34"
            cy="200.15"
            r="50.4"
          />
        </g>
      </g>
    </svg>
  );
}
