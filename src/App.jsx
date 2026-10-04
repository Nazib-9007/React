// import Compo from "./component/Compo.jsx"
// import Car from "./component/Car.jsx"
import Conditional from "./component/Condition.jsx"

function App() {
const carInfo ={
  name: 'Ford',
  model: 'Mustang',
  color: 'Black',
  year: 2026
}
  return (
    <>
      <h1 className="p-2">Welcome to my car app</h1>
      {/* <Compo /> */}

      {/* <Car
        brand="Audi"
        obj="Car"
        model="q10"
        year={2025}
        fuel={['Octen --', ' Diesel --', ' Pettrol']} {...carInfo}
      /> */}

        <Conditional name="John Doe" age={22} />
        <Conditional name="Alice" age={15} />

    </>
  )
}
export default App
