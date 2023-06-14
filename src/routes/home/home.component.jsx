import Illus from "../../assests/illus.png";

const Home = () => {
  return (
    <div className="w-full x-4 my-24">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Illus} alt="dog" className=" -mt-28 md:mt-0" />
        <div className="mx-10 flex flex-col justify-center items-center text-center">
          <h3 className=" text-white font-semibold text-3xl md:text-5xl md:pb-10">
            Hello Hoomans !
          </h3>
          <p className=" text-white text-lg items-center md:text-xl">
            Welcome to DOGSBOOK, here you can know all about me and my
            furry friends. Also, you may fall in love with one of us and decide to
            bring us home, in anyway thank you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
