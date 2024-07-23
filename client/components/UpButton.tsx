"use client";
import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

const UpButton = () => {
  const [isDown, setIsDown] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsDown(true);
      } else {
        setIsDown(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
      className={`fixed bottom-10 duration-700 size-12 bg-green-950 text-white flex items-center justify-center rounded-full ${
        isDown ? "right-10 opacity-100" : "-right-40 rotate-90 opacity-0"
      }`}
    >
      <ArrowBigUp size={30} />
    </button>
  );
};

export default UpButton;
