import React from "react";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import ResearchButton from "./ResearchButton";

const Home = () => {
  return (
    <section>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <ResearchButton/>
    </section>
  );
};

export default Home;
