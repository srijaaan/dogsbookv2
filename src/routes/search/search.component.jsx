import "./search.styles.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useContext } from "react";
import { DogsContext } from "../../context/dogs.context";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const { dogs } = useContext(DogsContext);
  const navigate = useNavigate();
  const handleOnSelect = ({ name }) => {
    navigate(`/dog/${name}`);
  };
  return (
    <>
    <div className="s130 items-center flex flex-col ">
      <ReactSearchAutocomplete
        className="w-96 md:w-[700px] -mt-48 scale=110 md:scale-125 px-5"
        placeholder="Enter the breed here..."
        items={dogs !== null ? dogs : console.log("error")}
        onSelect={handleOnSelect}
      />
    <span className="mt-10 text-white">*If search results don't appear please reload*</span>
    </div>
    </>
  );
};

export default Search;
