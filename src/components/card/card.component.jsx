import "./card.styles.css";

const Card = ({ dog }) => {
  const { name, bred_for, temperament, life_span, image } = dog;

  return (
    <div className="bg-white h-auto md:h-[650px] w-[300px] sm:w-[400px] md:w-[350px] lg:w-[450px] rounded-xl object-cove cursor-pointer card">
      <img
        src={image.url}
        alt="dog"
        className="w-[300px] sm:w-[400px] md:w-[350px] lg:w-[450px] h-auto rounded-xl"
      />
      <div className=" text-center p-6">
        <h1 className="text-xl font-semibold mb-5">{name}</h1>
        <p>
          <b>Breed for:</b> {bred_for}
        </p>
        <p>
          <b>Temparment:</b> {temperament}
        </p>
        <p>
          <b>Life Span:</b> {life_span}
        </p>
      </div>
    </div>
  );
};

export default Card;
