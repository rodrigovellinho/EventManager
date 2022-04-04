import EventList from "../components/events/EventList";
import EventsSearch from "../components/events/EventsSearch";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../components/helpers/api-util";

function HomePage(props) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
