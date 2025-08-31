"use client";

import { useAnimation } from "framer-motion";
import { useState } from "react";

export default function Logo() {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  async function handleHoverStart() {
    setHovered(true);
    await controls.start({
      strokeDashoffset: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    });
  }

  function handleHoverEnd() {
    setHovered(false);
    controls.set({ strokeDashoffset: 0 }); // keep stroke visible after hover ends
  }

  const pathVariants = {
    initial: { strokeDashoffset: 600, strokeWidth: 1.5 },
    hover: { strokeWidth: 5 },
  };

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g data-name="Layer 2" fill="white">
          <path data-name="invisible box" d="M0 0h48v48H0z" fill="none" />
          <path d="M44 26a2 2 0 0 0 0-4h-6v-8h6a2 2 0 0 0 0-4h-6V4a2 2 0 0 0-4 0v6h-8V4a2 2 0 0 0-4 0v6h-8V4a2 2 0 0 0-4 0v6H4a2 2 0 0 0 0 4h6v8H4a2 2 0 0 0 0 4h6v8H4a2 2 0 0 0 0 4h6v6a2 2 0 0 0 4 0v-6h8v6a2 2 0 0 0 4 0v-6h8v6a2 2 0 0 0 4 0v-6h6a2 2 0 0 0 0-4h-6v-8ZM34 14v8h-8v-8Zm-20 0h8v8h-8Zm0 20v-8h8v8Zm20 0h-8v-8h8Z" data-name="icons Q2" />
        </g>
      </svg> */}
      <p className="bg-gray-400/20 rounded-full w-10 h-10 p-0 font-medium flex items-center justify-center">AK</p>
    </div>
  );
}
