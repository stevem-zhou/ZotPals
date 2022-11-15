import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Members from "./components/Members";
import data from "./data";

function App() {
  let x = data.map(function (element) {
    return (
      <Members namee={element.name} agee={element.age} jobb={element.job} />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <h1 className="hello-text">Hello</h1>
      {x}
    </div>
  );
}

export default App;
