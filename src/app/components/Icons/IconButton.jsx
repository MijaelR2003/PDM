import React from "react";
import { Button } from "@nextui-org/react";
function IconButton({ text, children, bgColor = "#ACADAC", onPress }) {
  const buttonClass = `w-full text-white bg-[${bgColor}] hover:bg-[${bgColor}]/90 focus:ring-4 focus:outline-none focus:ring-[${bgColor}]/50 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2`;

  return (
    <Button type="button" size="lg" className={buttonClass} onClick={onPress}>
      {children}
      {text}
    </Button>
  );
}

export default IconButton;
