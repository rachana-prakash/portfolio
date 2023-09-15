import { ReactNode } from "react";
import LandscapeImage from "./LandscapeImage";

interface Props {
  children: ReactNode;
  title: string;
  imageSrc?: string;
  order?: "normal" | "reverse";
  demoLink?: string;
  repoLink?: string;
  animateImage?: boolean;
}

const InfoCard = ({
  imageSrc,
  order,
  title,
  children,
  demoLink,
  repoLink,
  animateImage,
}: Props) => {
  return (
    <>
      <div
        className={
          (order === "reverse" ? "md:flex-row-reverse" : "md:flex-row ") +
          " flex flex-col  my-4 p-2 md:p-6 md:my-14"
        }
      >
        <div
          className={
            (order === "reverse" ? "md:ml-12" : "md:mr-12") +
            " md:basis-1/2  mb-12"
          }
        >
          <h3 className="text-sky dark:text-cerulean text-2xl md:text-4xl font-medium italic">
            {title}
          </h3>
          {children}
          <div className="flex justify-between">
            {demoLink && (
              <a
                className="text-cerulean dark:text-sky hover:text-sky dark:hover:text-cerulean underline font-medium"
                href={demoLink}
                target="_blank"
              >
                {" "}
                Live Demo{" "}
              </a>
            )}
            {repoLink && (
              <a
                className="text-cerulean dark:text-sky  hover:text-sky dark:hover:text-cerulean underline font-medium"
                href={repoLink}
                target="_blank"
              >
                {" "}
                Repo Link{" "}
              </a>
            )}
          </div>
        </div>
        <div className="md:flex-basis-half flex items-center justify-center">
          <LandscapeImage
            src={imageSrc || ""}
            alt="project image"
            swingAnimate={animateImage}
          />
        </div>
      </div>
    </>
  );
};

export default InfoCard;
