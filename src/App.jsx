// import Compo from "./component/Compo.jsx"
import Car from "./component/Car.jsx"

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

      <Car
        brand="Audi"
        obj="Car"
        model="q10"
        year={2025}
        fuel={['Octen --', ' Diesel --', ' Pettrol']} {...carInfo}
      />
    </>
  )
}
export default App
