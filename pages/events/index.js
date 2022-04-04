import { getAllEvents } from "../../components/helpers/api-util";
import EventList from "../../components/events/EventList";

function AllEventsPage(props) {
  const events = getAllEvents();
  return (
    <div>
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
