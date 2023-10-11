import React from "react";
import {
  About,
  Achievements,
  Contact,
  Hero,
  Portfolio,
  Resume,
} from "../components";

const HomePage = ({
  hero,
  about,
  achievements,
  projects,
  catList,
  resumes,
  socials,
  contact,
}) => {
  return (
    <main className="container2">
      <Hero hero={hero} socials={socials} />
      <About about={about} />
      <Achievements achievements={achievements} />
      <Resume resumes={resumes} />
      <Portfolio projects={projects} catList={catList} />
      <Contact contact={contact} />
    </main>
  );
};

export default HomePage;
