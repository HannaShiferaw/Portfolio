import React from "react";

function Logo({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M8 6v24M28 6v24M8 18h20"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="18" r="1.5" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export default Logo;
