// no need to  import react in newer versions

// a better method to import is to import all the files of a folder and then
// just import that file immediately

import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false); // corrected the function name

  const toggleDark = () => {
    // corrected the function name
    setDarkMode(!darkMode);
  };

  return (
    <main className={`relative ${darkMode && "dark"} dark:bg-neutral-900`}>
      <button
        onClick={toggleDark}
        className="z-40 fixed w-16 h-16 top-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
      >
        {darkMode ? "LHT" : "DRK"}
      </button>
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b dark:bg-neutral-900 dark:text-gray-200">
        <Hero />
      </section>
      <section className="padding dark:bg-neutral-900 dark:text-gray-200">
        <PopularProducts />
      </section>
      <section className="padding dark:bg-neutral-900 dark:text-gray-200">
        <SuperQuality />
      </section>
      <section className="padding-x py-10 dark:bg-neutral-900 dark:text-gray-200">
        <Services />
      </section>
      <section className="padding dark:bg-neutral-900 dark:text-gray-200">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding dark:bg-neutral-900 dark:text-gray-200">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full dark:bg-neutral-900 dark:text-gray-200">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 dark:bg-neutral-900 dark:text-gray-200">
        <Footer />
      </section>
    </main>
  );
}

export default App;

// add the darkMode : "class" to tailwind config todo this
// now if the main div is dark enabled dark mode will work else it wont
