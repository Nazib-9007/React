import Son from "./components/Son.jsx";
import Daughter from "./components/Daughter.jsx";

function App() {
  return (
    <div>
      <Son>
        <h1>His has two sons!</h1>
        <p>
          This was written in the Parent component, but displayed as a part of
          the Son component
        </p>
      </Son>

      <Daughter type="Car" brand="BMW" className="bg-pink-300">
        <h1>He his one Daughter!</h1>
        <p>
          This was written in the Parent component, but displayed as a part of
          the Daughter component
        </p>
      </Daughter>
    </div>
  );
}

export default App;