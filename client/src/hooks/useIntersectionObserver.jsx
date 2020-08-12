import { useEffect } from "react";

export default (ref) => {

  useEffect(() => {
    console.count("hook")
    console.log(ref.current)
    const observer = new IntersectionObserver((entries) => {
      entries[0].isIntersecting
        ? console.log("intersecting")
        : console.log("!intersecting")
    });

    observer.observe(ref.current);
  }, [ref]);
};
