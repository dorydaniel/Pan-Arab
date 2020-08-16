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
  const [user, setUser] = useState({ email: "" });

  const handleChange = (e) => {
    const vlaue = e.target.value;
    setUser({ [e.target.name]: e.target.value });
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
      <Countries />
      <Events />
      <hr className="border-2 border-graydark m-4" />
      <Articles />
      <Subscription email={user.email} setEmail={handleChange} />
      <Trips />
      <Flight />
      <Footer />
    </div>
  );
}
