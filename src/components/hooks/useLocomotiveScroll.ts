import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export function useLocomotiveScroll() {
  const scrollRef = useRef<HTMLDivElement>();
  const locomotive = useRef<LocomotiveScroll>();
  useEffect(() => {
    if (!scrollRef.current) return;
    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      const scroll = new Locomotive({
        el: scrollRef.current,
        smooth: true,
      });
    }

    getLocomotive();
  }, []);
  // useEffect(() => {
  //   if (!scrollRef.current) return;

  //   locomotive.current = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   return () => {
  //     locomotive.current?.destroy();
  //   };
  // }, []);

  return { scrollRef };
}
 