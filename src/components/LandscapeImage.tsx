interface Props {
  src: string;
  alt?: string;
  swingAnimate?: boolean;
}
const LandscapeImage = ({ src, alt, swingAnimate }: Props) => {
  return (
    <>
      <div className="relative   w-52 h-40  md:w-full md:h-auto z-0  mx-auto before:content-[''] before:rounded-xl before:-translate-x-5 before:-translate-y-5  md:before:-translate-x-6 md:before:-translate-y-10 before:absolute before:-z-10  before:border-sky before:border-4 before:w-full before:h-3/4 ">
        <img
          className={
            (swingAnimate ? "animate-swing" : "") +
            "  rounded-xl w-52 h-40  md:w-full md:h-auto  object-cover bg-white shadow-md"
          }
          src={src}
          alt={alt}
        />
      </div>
    </>
  );
};

export default LandscapeImage;
