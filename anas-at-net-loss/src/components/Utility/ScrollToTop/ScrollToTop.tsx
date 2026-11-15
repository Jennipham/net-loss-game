"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaChevronCircleUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(false);
  }, [pathname]);

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <FaChevronCircleUp size={40} />
    </button>
  );
}