import Compo from "./component/Compo.jsx"
// import Car from "./component/Car.jsx"

// import Compo from "./component/Compo.jsx"
import Car from "./component/Car.jsx"
import Conditional from "./component/Condition.jsx"

function App() {
  const members = [
    {name: 'John Doe', age: 22},
    {name: 'Alice Bob', age: 21},
    {name: 'Mosh', age: 30},
    {name: 'Kim Do-Ha', age: 17}
  ]
const carInfo ={
  name: 'Ford',
  model: 'Mustang',
  color: 'Black',
  year: 2026
}
  return (
    <>
      <h1 className="text-2xl text-center">Welcome to my car app</h1>
      {/* <Compo /> */}

      <Car
        brand="Audi"
        obj="Car"
        model="q10"
        year={2025}
        fuel={['Octen --', ' Diesel --', ' Pettrol']} {...carInfo}
      />

        {
          members.map((member) => (
            <Compo naam ={member.name} age={member.age} />
          ))
        }

        <Conditional name="John Doe" age={22} />
        <Conditional name="Alice" age={15} />

    </>
  )
}
export default App
