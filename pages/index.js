import { getFeaturedEvents } from "../dummy_data";
import EventList from "../components/events/EventList";
import EventsSearch from "../components/events/EventsSearch";
import { Fragment } from "react";
import { useRouter } from "next/router";

function HomePage() {
  const featuredeEvents = getFeaturedEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={featuredeEvents} />
    </Fragment>
  );
}

export default HomePage;
