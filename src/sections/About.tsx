import DateHelper from "../services/date-helper";
const About = () => {
  const date = new DateHelper();
  const industryExp = date.getYearDifference("2016") - 1;
  const feExp = date.getYearDifference("2018") - 1;
  return (
    <section id="about" className="scroll-mt-20 p-4 my-8 md:p-8 md:my-12">
      <h2 className="text-3xl font-bold sm:text-5xl mb-2 md:mb-6 text-midnight dark:text-white">
        About
      </h2>
      <div className="flex flex-col items-center">
        <p className="text-md py-5 leading-8 md:text-xl max-w-4xl ">
          I have {industryExp + "+"} years of industry experience, including{" "}
          <span className="text-sky  dark:text-cerulean">
            {feExp + "+"} years{" "}
          </span>{" "}
          in Frontend. From implementing{" "}
          <span className="text-sky  dark:text-cerulean">wireframes </span> and
          design flows into{" "}
          <span className="text-sky  dark:text-cerulean">
            high performance{" "}
          </span>{" "}
          software applications to taking into consideration{" "}
          <span className="text-sky  dark:text-cerulean">
            accessibility and user experience,{" "}
          </span>{" "}
          you can count on me.{" "}
          <span className="text-sky  dark:text-cerulean">
            Requirement Analysis
          </span>{" "}
          and writing{" "}
          <span className="text-sky  dark:text-cerulean">
            reusable and efficient code
          </span>{" "}
          is my forte. I have also{" "}
          <span className="text-sky  dark:text-cerulean">mentored</span>{" "}
          teammates and{" "}
          <span className="text-sky  dark:text-cerulean">collaborated</span>{" "}
          with various teams including Product Owners, UX and the Backend too.
        </p>
        <p className="text-md py-5 leading-8 md:text-xl max-w-4xl ">
          I love building fun applications and exploring new technologies.
          Currently I'm exploring{" "}
          <span className="text-sky  dark:text-cerulean">Testing in React</span>{" "}
          and will be looking into{" "}
          <span className="text-sky  dark:text-cerulean">Vue.js </span> pretty
          soon. You can have a look at my current skills below.
        </p>
      </div>
    </section>
  );
};

export default About;
