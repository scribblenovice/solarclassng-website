import React, { useEffect, useRef, useState } from "react";

const InViewPortDetector = ({ children, className, otherclass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        observer.unobserve(ref.current);
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`${isVisible ? className : ""} ${otherclass}`}>
      {children}
    </div>
  );
};

export default InViewPortDetector;
