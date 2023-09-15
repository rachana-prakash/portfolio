interface Props {
  src: string;
  object_fit?: string;
  alt?: string;
}

const PotraitImage = ({ src, alt }: Props) => {
  return (
    <>
      <div className="relative  z-0 w-40 h-40 mt-20 md:w-60 md:h-60  lg:h-96 lg:w-96 mx-auto before:content-[''] before:rounded-xl before:-translate-x-5 before:-translate-y-5  md:before:-translate-x-10 md:before:-translate-y-10 before:absolute before:-z-10  before:border-sky before:border-4 before:w-full before:h-full ">
        <img className="rounded-xl" src={src} alt={alt} />
      </div>
    </>
  );
};

export default PotraitImage;
