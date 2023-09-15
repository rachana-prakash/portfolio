import InfoCard from "../components/InfoCard";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import coming_soon from "../assets/projects/coming-soon.png";
const Projects = () => {
  return (
    <section
      id="portfolio"
      className="scroll-mt-20 p-4 my-8 md:p-8 md:my-12 max-w-5xl"
    >
      <h2 className="text-3xl font-bold sm:text-5xl mb-2 md:mb-6 text-midnight dark:text-white">
        Portfolio
      </h2>
      <div className="flex flex-col">
        <InfoCard
          imageSrc={project2}
          title="Game Hub"
          demoLink="https://game-hub-gamma-gules.vercel.app/"
          repoLink="https://github.com/rachana-prakash/game-hub"
        >
          <p className="my-2">
            GameHub is a video{" "}
            <span className="text-sky  dark:text-cerulean">
              game discovery web app
            </span>{" "}
            that helps you find new and interesting games to play. With GameHub,
            you can <span className="text-sky  dark:text-cerulean">search</span>{" "}
            for games by{" "}
            <span className="text-sky  dark:text-cerulean">
              platform, genre,
            </span>{" "}
            and more. This is a personal project built using{" "}
            <span className="text-sky  dark:text-cerulean">
              React and ChakraUI.
            </span>{" "}
            Integrated with{" "}
            <span className="text-sky  dark:text-cerulean">
              Responsive Design and Zustand stores.
            </span>
          </p>
        </InfoCard>

        <InfoCard
          imageSrc={project3}
          title="Marvel News"
          demoLink="https://marvel-media.vercel.app/marvelNews"
          repoLink="https://github.com/rachana-prakash/marvel-media"
          order="reverse"
        >
          <p className="my-2">
            A simple
            <span className="text-sky  dark:text-cerulean">
              {" "}
              news media application
            </span>{" "}
            based on Marvel with a{" "}
            <span className="text-sky  dark:text-cerulean"> private</span>{" "}
            gallery view consisting of images fetched from a Marvel API. This is
            a personal project built on{" "}
            <span className="text-sky  dark:text-cerulean"> Angular</span> 11
            and upgraded recently to Angular 15. Integrated with{" "}
            <span className="text-sky  dark:text-cerulean">
              Responsive Design and NgRx stores.
            </span>
          </p>
        </InfoCard>
        <InfoCard
          imageSrc={project1}
          title="Homegenius"
          demoLink="https://www.homegenius.com/"
        >
          <p className="my-2">
            Homegenius is a{" "}
            <span className="text-sky  dark:text-cerulean">real estate </span>{" "}
            transaction management system for a virtual brokerage. It focuses on
            discovering, purchasing or selling real estate. Built from scratch
            using <span className="text-sky  dark:text-cerulean">Angular </span>{" "}
            by a team of{" "}
            <span className="text-sky  dark:text-cerulean">
              5 Frontend Engineers.
            </span>
          </p>
        </InfoCard>

        <InfoCard
          imageSrc={coming_soon}
          animateImage={true}
          title="Pokedex"
          order="reverse"
        >
          <p className="my-2">
            A collection of first generation Pokemon with fancy
            <span className="text-sky  dark:text-cerulean">
              {" "}
              animation{" "}
            </span>{" "}
            and interactive interfaces. Searching for your favourite Pokemon
            will be super fun! Will be built from scratch using{" "}
            <span className="text-sky  dark:text-cerulean">
              React, Redux & Tailwind.{" "}
            </span>
          </p>
        </InfoCard>
      </div>
    </section>
  );
};

export default Projects;
