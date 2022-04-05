import { getAllEvents } from "../../components/helpers/api-util";
import EventList from "../../components/events/EventList";
import Head from "next/head";

function AllEventsPage(props) {
  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getAllEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default AllEventsPage;
