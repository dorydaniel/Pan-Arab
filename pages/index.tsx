import { useState } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import Countries from "../components/countries/Countries";
import Events from "../components/events/Events";
import Articles from "../components/articles/Articles";
import Subscription from "../components/subscription/Subscription";
import Trips from "../components/trips/Trips";
import Flight from "../components/flight/Flight";
import Footer from "../components/footer/Footer";
import UpperHeader from "../components/header/UpperHeader";

export default function Home() {
  const countries = [
    { id: "LEB", name: "Lebanon" },
    { id: "DUB", name: "Dubai" },
    { id: "ABD", name: "Abu Dhabi" },
    { id: "QAT", name: "Qatar" },
    { id: "BAH", name: "Bahrain" },
    { id: "SYR", name: "Syria" },
    { id: "IRA", name: "Iraq" },
    { id: "JOR", name: "Jordan" },
    { id: "SAA", name: "Saudi Arabia" },
    { id: "OMA", name: "Oman" },
    { id: "KUW", name: "Kuwait" },
    { id: "MOR", name: "Morocco" },
    { id: "PAL", name: "Palestine" },
    { id: "EGY", name: "Egypt" },
    { id: "ALG", name: "Algeria" },
  ];

  const events = [
    { id: "event1", type: "CONCERTS", url: "/images/events/concert.jpg" },
    { id: "event2", type: "MUSEUMS", url: "/images/events/museum.jpg" },
    { id: "event3", type: "THEATRES", url: "/images/events/theatre.jpg" },
    { id: "event4", type: "GALLERIES", url: "/images/events/gallerie.jpg" },
  ];

  const articles = {
    firstArticle: {
      id: "article1",
      type: "Musique",
      title: "ANTONINE UNIVERSITY CHOIR LIVE IN CONCERT",
      date: "07/06/2020 à 17:00",
      hrVisible: false,
    },
    secondArticle: {
      id: "article2",
      type: "Concert",
      title: "ONLINE GALLERY, SELECTED WORKS",
      date: "07/06/2020 à 17:00",
      hrVisible: true,
    },
    leftArticles: [
      {
        id: "article3",
        type: "Musique",
        title: "LIVE STREAM: IBRAHIM MAALOUF",
        date: "07/06/2020 à 17:00",
        hrVisible: true,
      },
      {
        id: "article4",
        type: "Exhibition",
        title: "BAR FAROUKF",
        date: "07/06/2020 à 17:00",
        hrVisible: true,
      },
      {
        id: "article5",
        type: "Conference",
        title: "KAFR KASSEM",
        date: "07/06/2020 à 17:00",
        hrVisible: true,
      },
      {
        id: "article6",
        type: "Film",
        title: "LES LIBANAIS, UN PEUPLE URBANISÉ",
        date: "07/06/2020 à 17:00",
        hrVisible: false,
      },
    ],

    rightArticles: [
      {
        id: "article7",
        type: "Exhibition",
        title: "LAST DAYS, ETEL ADNAN",
        date: "07/06/2020 à 17:00",
        hrVisible: true,
      },
      {
        id: "article8",
        type: "Film",
        title: "MASKOON FANTASTIC FILM FESTIVAL",
        date: "07/06/2020 à 17:00",
        hrVisible: true,
      },
      {
        id: "article9",
        type: "Musique",
        title: "NOSTALGIC EXPRESSIONS, GEBRAN VLADIMIR YAZIGI",
        date: "07/06/2020 à 17:00",
        hrVisible: true,
      },
      {
        id: "article10",
        type: "Musique",
        title: "NOSTALGIC EXPRESSIONS, GEBRAN VLADIMIR YAZIGI",
        date: "07/06/2020 à 17:00",
        hrVisible: true,
      },
    ],
  };

  const [email, setEmail] = useState("");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vlaue = e.target.value;
    setEmail(vlaue);
  };

  return (
    <div>
      <Head>
        <title>MAIN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UpperHeader />
      <Header />
      <Slider />
      <Countries countries={countries} />
      <Events events={events} />
      <hr className="border-2 border-graydark m-4" />
      <Articles articles={articles} />
      <Subscription email={email} setEmail={handleChange} />
      <Trips trips={trips} />
      <Flight />
      <Footer />
    </div>
  );
}
