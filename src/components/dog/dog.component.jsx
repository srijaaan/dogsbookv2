import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DogsContext } from "../../context/dogs.context";

const Dog = () => {
  const { dogs } = useContext(DogsContext);
  const { dogName } = useParams();
  const [serDog, setSerDog] = useState();
  const [wiki, setwiki] = useState();
  useEffect(() => {
    const getDogs = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("x-api-key", "83ab2b1b-19ba-4ad0-ac08-6a99e7502a18");
      const url = `https://api.thedogapi.com/v1/breeds/search?q=${dogName}`;
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      let response = await fetch(url, requestOptions);
      let dres = await response.json();
      setSerDog(dres);
    };
    getDogs();
  }, [dogName]);

  let url = "";
  if (dogs !== undefined && serDog !== undefined) {
    url = dogs.find((dog) => dog.name === serDog[0].name).image.url;
  }

  useEffect(() => {
    const getWiki = async () => {
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${dogName}`;
      let response = await fetch(url);
      let dres = await response.json();
      setwiki(dres);
    };
    getWiki();
  }, [dogName]);

  if (serDog !== undefined && dogs !== undefined && wiki !== null) {
    return (
      <div className="w-full x-4 my-24">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            src={url}
            alt="dog"
            className=" -mt-28 md:mt-0 rounded-xl shadow-xl scale-75 md:scale-100"
          />
          <div className="mx-10 flex flex-col justify-center items-center text-center">
            <h3 className=" text-white font-semibold text-3xl md:text-5xl md:pb-10">
              {serDog[0].name}
            </h3>
            <p className=" text-gray-800 text-lg items-center md:text-xl mb-7">
              {wiki.extract}
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="felx flex-col justify-around">
                <p className=" text-black text-lg items-center md:text-xl mb-3">
                  <b className="text-white">Breed For: </b>
                  {serDog[0].bred_for}
                </p>
                <p className=" text-black text-lg items-center md:text-xl mb-3">
                  <b className="text-white">Breed Group: </b>
                  {serDog[0].breed_group}
                </p>
                <p className=" text-black text-lg items-center md:text-xl mb-3">
                  <b className="text-white">Life Span: </b>
                  {serDog[0].life_span}
                </p>
              </div>
              <div className="felx flex-col justify-around">
                <p className=" text-black text-lg items-center md:text-xl">
                  <b className="text-white">Temperament: </b>
                  {serDog[0].temperament}
                </p>
                <p className=" text-black text-lg items-center md:text-xl">
                  <b className="text-white">Height: </b>
                  {serDog[0].height.metric} cm
                </p>
                <p className=" text-black text-lg items-center md:text-xl">
                  <b className="text-white">Weight: </b>
                  {serDog[0].weight.metric} kg
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Dog;
