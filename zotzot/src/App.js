import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./sharedComponents/Navbar";
import Members from "./sharedComponents/Members";
import data from "./data";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Post from "./pages/Post";
import About from "./pages/About";

function App() {
  // let x = data.map(function (element) {
  //   return (
  //     <Members namee={element.name} agee={element.age} jobb={element.job} />
  //   );
  // });

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/post" element={<Post />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {/* <h1 className="hello-text">Hello</h1> */}
      {/* {x} */}
    </div>
  );
}

export default App;
