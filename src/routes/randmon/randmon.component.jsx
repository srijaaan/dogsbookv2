import Card from "../../components/card/card.component";
import { useContext } from "react";
import { DogsContext } from "../../context/dogs.context";

const Random = () => {
  const { dogs } = useContext(DogsContext);

  function getRandomValuesFromArray(array) {
    const randomValues = [];
    while (randomValues.length < 3) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomValue = array.splice(randomIndex, 1)[0];
      randomValues.push(randomValue);
    }

    return randomValues;
  }
  const arr =
    dogs !== undefined ? getRandomValuesFromArray(dogs) : console.log("");

  return (
    <div className="w-full x-4 my-2 h-[800px] mt-10">
      <div className="max-w-[1500px] mx-auto flex flex-col  items-center -mt-5">
        <h1 className="text-white font-semibold text-3xl md:text-5xl">
          Randoms
        </h1>
        <hr className=" w-36 md:w-52 mt-3 border-2 rounded-sm mb-6" />
        <div className="grid grid-rows-3 md:grid-cols-3 gap-5 md:gap-10 md:h-[700px]">
          {dogs !== undefined
            ? arr.map((dog) => <Card dog={dog} key={dog.id} />)
            : console.log()}
        </div>
      </div>
    </div>
  );
};

export default Random;
