import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid"; // Optional: for a nice icon

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      aria-label="Back to top"
    >
      <ChevronUpIcon className="w-5 h-5" />
    </button>
  ) : null;
};

export default BackToTopButton;
