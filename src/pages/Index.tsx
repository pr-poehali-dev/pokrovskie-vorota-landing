import { useEffect } from "react";
import TheaterNav     from "@/components/theater/TheaterNav";
import TheaterHero    from "@/components/theater/TheaterHero";
import TheaterContent from "@/components/theater/TheaterContent";
import TheaterTickets from "@/components/theater/TheaterTickets";

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <TheaterNav />
      <TheaterHero />
      <TheaterContent />
      <TheaterTickets />
    </div>
  );
}
