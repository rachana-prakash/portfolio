import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import user from "../assets/user.jpg";
import PotraitImage from "../components/PotraitImage";
import resume from "../Rachana_Prakash_Resume.pdf";
const Home = () => {
  return (
    <section id="home" className="scroll-mt-20 p-4 my-8 md:p-8 md:my-12">
      <div className="flex flex-col items-center text-center">
        <p className="text-md py-2 md:py-5 leading-8  md:text-xl max-w-xl font-medium">
          Hi, I'm{" "}
        </p>
        <h2 className="text-3xl  py-2 text-sky  dark:text-cerulean font-medium md:text-6xl">
          Rachana K Prakash,
        </h2>

        <p className="text-md py-5 leading-8  md:text-xl max-w-xl ">
          a{" "}
          <span className="text-sky  dark:text-cerulean font-medium">
            Frontend Engineer{" "}
          </span>{" "}
          from India. I like creating{" "}
          <span className="text-sky  dark:text-cerulean">
            clean, accessible and efficient,
          </span>{" "}
          user experiences.
          <a
            href="#portfolio"
            className="ml-2 whitespace-nowrap underline duration-500 relative after:content-['»'] after:absolute after:-right-4  after:opacity-0 md:after:hover:opacity-100 after:duration-500"
          >
            {" "}
            Check out my work{" "}
          </a>
        </p>
        <div className="m-4">
          <a
            className="bg-gradient-to-r  from-sky to-teal-500 font-semibold text-xl  hover:bg-gradient-to-r hover:opacity-90 hover:to-sky text-white px-4 py-2 rounded-md"
            href={resume}
            target="_blank"
          >
            Resume
          </a>
        </div>
        <div className="text-3xl md:text-5xl flex gap-16 py-3 text-midnight dark:text-white">
          <a href="mailto:rachana.prakash91@gmail.com" aria-label="email-link">
            <AiFillMail className="hover:text-sky dark:hover:text-sky" />
          </a>
          <a
            href="https://www.linkedin.com/in/rachanakp/"
            target="_blank"
            aria-label="linked in link"
          >
            <AiFillLinkedin className="hover:text-sky dark:hover:text-sky" />
          </a>
          <a
            href="https://github.com/rachana-prakash"
            target="_blank"
            aria-label="github link"
          >
            <AiFillGithub className="hover:text-sky dark:hover:text-sky" />
          </a>
        </div>
      </div>
      <PotraitImage src={user} />
    </section>
  );
};

export default Home;
