
import React from 'react';

export const MessageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 3h-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" />
    <path d="M21 5h-2.5" />
    <path d="M21 9h-2.5" />
    <path d="M21 13h-2.5" />
    <path d="M21 17h-2.5" />
    <path d="M7 21h10" />
    <path d="M3 3v10a2 2 0 0 0 2 2h2" />
  </svg>
);
