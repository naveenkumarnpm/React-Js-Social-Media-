import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCounter from "./components/DisplayCounter";
import Heading from "./components/Heading";
import CardContainer from "./components/CardContainer";
import Controls from "./components/Controls";

function App() {
  return (
    <center>
      <div className="px-4 py-5 my-5 text-center">
        <CardContainer>
          <Heading />
          <div className="col-lg-6 mx-auto">
            <DisplayCounter />
            <Controls />
          </div>
        </CardContainer>
      </div>
    </center>
  );
}

export default App;
