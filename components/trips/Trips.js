import Trip from "./Trip";

function Trips() {
  const trips = [
    {
      id: "trip1",
      url: "/images/trips/palace.jpg",
      alt: "Palace",
      title: "Visit The Palace",
      period: "30 July - 5 August 2020",
      description: "This is the text area for this paragraph.",
      fb: true,
      twt: true,
      insta: true,
      yt: false,
    },
    {
      id: "trip2",
      url: "/images/trips/dubai-aquarium.jpg",
      alt: "Dubai Aquarium",
      title: "Dubai Aquarium",
      period: "May - September",
      description: "This is the text area for this paragraph.",
      fb: true,
      twt: false,
      insta: false,
      yt: true,
    },
    {
      id: "trip3",
      url: "/images/trips/cruise.jpg",
      alt: "Cruise",
      title: "The Cruise",
      period: "July - October",
      description: "This is the text area for this paragraph.",
      fb: true,
      twt: false,
      insta: true,
      yt: false,
    },
    {
      id: "trip4",
      url: "/images/trips/safari.jpg",
      alt: "Safari",
      title: "Safari Sahara",
      period: "August - September",
      description: "This is the text area for this paragraph.",
      fb: false,
      twt: false,
      insta: false,
      yt: true,
    },
    {
      id: "trip5",
      url: "/images/trips/seaside.jpg",
      alt: "Seaside",
      title: "By the Seaside",
      period: "10 July - 30 August",
      description: "This is the text area for this paragraph.",
      fb: true,
      twt: true,
      insta: true,
      yt: false,
    },
    {
      id: "trip6",
      url: "/images/trips/photographia.jpg",
      alt: "Photographia",
      title: "Photographia",
      period: "01 May - 10 June",
      description: "This is the text area for this paragraph.",
      fb: true,
      twt: false,
      insta: true,
      yt: false,
    },
  ];

  return (
    <div className="flex flex-wrap my-5">
      {trips.map((trip) => (
        <Trip key={trip.id} data={trip} />
      ))}
    </div>
  );
}

export default Trips;
