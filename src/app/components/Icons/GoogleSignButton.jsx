import { Button } from "@nextui-org/react";

function GoogleSignButton({ children, text, onPress }) {
  return (
    <Button
      onClick={onPress}
      type="button"
      className="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
    >
      {children}
      {text}
    </Button>
  );
}

export default GoogleSignButton;
