import Trip from "./Trip";

type Props = {
  trips: {
    id: string;
    url: string;
    alt: string;
    title: string;
    period: string;
    description: string;
    fb: boolean;
    twt: boolean;
    insta: boolean;
    yt: boolean;
  }[];
};

function Trips({ trips }: Props) {
  return (
    <div className="flex flex-wrap my-5">
      {trips.map((trip) => (
        <Trip key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default Trips;
