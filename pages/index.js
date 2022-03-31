import { getFeaturedEvents } from "../dummy_data";
import EventList from "../components/events/EventList";
import EventsSearch from "../components/events/EventsSearch";
import { Fragment } from "react";

function HomePage() {
  const featuredeEvents = getFeaturedEvents();

  console.log(featuredeEvents);

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={featuredeEvents} />
    </Fragment>
  );
}

export default HomePage;
