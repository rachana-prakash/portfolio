import { useState } from "react";
import "./App.css";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Home from "./sections/Home";
import resume from "./Rachana_Prakash_Resume.pdf";
const toggleMenu = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu?.classList.toggle("hidden");
  mobileMenu?.classList.toggle("flex");
  hamburgerBtn?.classList.toggle("toggle-btn");
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <header className=" bg-gray-100 shadow-md text-midnight dark:bg-midnight dark:text-white sticky top-0 z-10">
        <section className="max-w-5xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium ">
            <a href="#home">
              {" "}
              <AiFillHome className="text-sky dark:text-sky md:text-midnight md:dark:text-white md:hover:text-sky md:dark:hover:text-sky" />
            </a>
          </h1>
          <div className="text-sky dark:text-sky md:text-midnight md:dark:text-white  md:hidden">
            {!darkMode && (
              <BsFillMoonFill
                onClick={() => setDarkMode(true)}
                className="cursor-pointer w-6 h-6 text-xl"
              />
            )}
            {darkMode && (
              <BsSunFill
                onClick={() => setDarkMode(false)}
                className="cursor-pointer w-6 h-6 text-xl"
              />
            )}
          </div>
          <div className="">
            <button
              id="hamburger-button"
              onClick={() => toggleMenu()}
              className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
            >
              <div className=" bg-sky  w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-sky  before:h-1 before:w-8 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-sky  after:h-1 after:w-8 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"></div>
            </button>
            <nav
              className="hidden md:block space-x-8 text-2xl font-medium"
              aria-label="main"
            >
              <a href="#about" className="hover:text-sky dark:hover:text-sky">
                About
              </a>
              <a href="#skills" className="hover:text-sky dark:hover:text-sky">
                Skills
              </a>
              <a
                href="#portfolio"
                className="hover:text-sky dark:hover:text-sky"
              >
                Portfolio
              </a>
              <a
                href={resume}
                target="_blank"
                className="hover:text-sky dark:hover:text-sky"
              >
                Resume
              </a>
            </nav>
          </div>
          {!darkMode && (
            <BsFillMoonFill
              onClick={() => setDarkMode(true)}
              className="cursor-pointer text-xl hidden md:block hover:text-sky dark:hover:text-sky"
            />
          )}
          {darkMode && (
            <BsSunFill
              onClick={() => setDarkMode(false)}
              className="cursor-pointer hidden md:block text-xl hover:text-sky dark:hover:text-sky"
            />
          )}
        </section>
        <section
          id="mobile-menu"
          onClick={() => toggleMenu()}
          className="absolute top-68 bg-gray-100 font-medium text-midnight dark:bg-midnight dark:text-white w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden md:hidden"
        >
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            aria-label="mobile"
          >
            <a
              href="#about"
              className="w-full text-center py-6 hover:opacity-90"
            >
              About
            </a>
            <a
              href="#skills"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Portfolio
            </a>
            <a
              href={resume}
              target="_blank"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Resume
            </a>
          </nav>
        </section>
      </header>
      <main className="dark:text-white bg-gray-100 dark:bg-midnight text-midnight">
        <div className=" max-w-5xl  mx-auto p-4">
          <Home />
          <About />
          <Skills />
          <Projects />
        </div>
      </main>

      <footer
        id="footer"
        className="bg-gray-100 text-midnight dark:bg-midnight dark:text-white text-sm flex justify-between "
      >
        <section className="max-w-5xl mx-auto p-4">
          <a
            href="https://github.com/rachana-prakash/portfolio"
            target="_blank"
            className="hover:opacity-90 text-sky dark:text-cerulean font-medium"
          >
            Built by Rachana K Prakash
          </a>
        </section>
      </footer>
    </div>
  );
}

export default App;
