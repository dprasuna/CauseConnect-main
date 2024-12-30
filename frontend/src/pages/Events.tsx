import { useRef } from "react";
import EventHero from "@/components/EventsComponents/EventHero";
import EventLists from "@/components/EventsComponents/EventLists";

const Events = () => {
  const eventListsRef = useRef<HTMLDivElement>(null);

  const scrollToEvents = () => {
    eventListsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <EventHero onScrollToEvents={scrollToEvents} />
      <div ref={eventListsRef}>
        <EventLists />
      </div>
    </div>
  );
};

export default Events;
