import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Search from "./routes/search/search.component";
import About from "./routes/about/about.component";
import Random from "./routes/randmon/randmon.component";
import Contact from "./routes/contact/contact.component";
import Dog from "./components/dog/dog.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="about" element={<About />} />
          <Route path="random" element={<Random />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dog/:dogName" element={<Dog />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
