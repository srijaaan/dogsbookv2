import { createContext, useState, useEffect } from "react";

export const DogsContext = createContext({
  dogs: [],
  setDogs: () => null,
});

export const DogsProvider = ({ children }) => {
  const [dogs, setDogs] = useState();
  useEffect(() => {
    const getDogs = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("x-api-key", "83ab2b1b-19ba-4ad0-ac08-6a99e7502a18");
      const url = `https://api.thedogapi.com/v1/breeds/`;
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      let response = await fetch(url, requestOptions);
      let dres = await response.json();
      setDogs(dres);
    };
    getDogs();
  }, []);

  const value = { dogs, setDogs };
  return <DogsContext.Provider value={value}>{children}</DogsContext.Provider>;
};
