import js_logo from "../assets/skills/logo-javascript.svg";
import angular_logo from "../assets/skills/angular-icon.svg";
import react_logo from "../assets/skills/react-2.svg";
import typescript_logo from "../assets/skills/typescript.svg";
import html_logo from "../assets/skills/html-1.svg";
import css_logo from "../assets/skills/css-3.svg";
import ngrx_logo from "../assets/skills/ngrx.svg";
import redux_logo from "../assets/skills/redux.svg";
import jest_logo from "../assets/skills/jest.svg";
import karma_logo from "../assets/skills/karma.svg";
import tailwind_logo from "../assets/skills/tailwind-css-2.svg";
import bootstrap_logo from "../assets/skills/bootstrap-4.svg";
import git_logo from "../assets/skills/git-icon.svg";
import rxjs_logo from "../assets/skills/rxjs-1.svg";
const Skills = () => {
  return (
    <section id="skills" className=" scroll-mt-20 p-4 my-8 md:p-8 md:my-12">
      <h2 className="text-3xl font-bold sm:text-5xl mb-2 md:mb-6 text-midnight dark:text-white">
        Skills & Tools
      </h2>
      <ul className="py-9 grid gap-x-9 gap-y-7 justify-center font-medium grid-cols-6col">
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={js_logo} alt="javascript logo" />
          </div>
          <p>Javascript</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={angular_logo} alt="angular logo" />
          </div>
          <p> Angular</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={react_logo} alt="react logo" />
          </div>
          <p> React</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={typescript_logo} alt="typescript logo" />
          </div>
          <p>Typescript</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={html_logo} alt="html logo" />
          </div>
          <p>HTML5</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={css_logo} alt="css logo" />
          </div>
          <p>CSS3</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={git_logo} alt="git logo" />
          </div>
          <p>Git</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={redux_logo} alt="redux logo" />
          </div>
          <p>Redux</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={ngrx_logo} alt="ngrx logo" />
          </div>
          <p> NgRx</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={rxjs_logo} alt="rxjs logo" />
          </div>
          <p>RxJs</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={jest_logo} alt="jest logo" />
          </div>
          <p>Jest</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={karma_logo} alt="karma logo" />
          </div>
          <p>Karma</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={tailwind_logo} alt="tailwind logo" />
          </div>
          <p>Tailwind</p>
        </li>
        <li className="flex flex-col justify-center items-center text-sm gap-1">
          <div className="h-16 w-16 mb-2">
            <img src={bootstrap_logo} alt="bootstrap logo" />
          </div>
          <p>Bootstrap</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
