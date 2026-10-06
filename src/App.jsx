<<<<<<< HEAD
import Compo from "./component/Compo.jsx"
// import Car from "./component/Car.jsx"
=======
// import Compo from "./component/Compo.jsx"
// import Car from "./component/Car.jsx"
import Conditional from "./component/Condition.jsx"
>>>>>>> 9a35dbf23da4414236f492ce0b39c7889a6329f2

function App() {
  const members = [
    {name: 'John Doe', age: 22},
    {name: 'Alice Bob', age: 21},
    {name: 'Mosh', age: 30},
    {name: 'Kim Do-Ha', age: 17}
  ]
// const carInfo ={
//   name: 'Ford',
//   model: 'Mustang',
//   color: 'Black',
//   year: 2026
// }
  return (
    <>
      <h1 className="text-2xl text-center">Welcome to my car app</h1>
      {/* <Compo /> */}

      {/* <Car
<<<<<<< HEAD
        // brand="Audi"
        // obj="Car"
        // model="q10"
        // year={2025}
        // fuel={['Octen --', ' Diesel --', ' Pettrol']} {...carInfo}
      /> */}

        {
          members.map((member) => (
            <Compo naam ={member.name} age={member.age} />
          ))
        }
=======
        brand="Audi"
        obj="Car"
        model="q10"
        year={2025}
        fuel={['Octen --', ' Diesel --', ' Pettrol']} {...carInfo}
      /> */}

        <Conditional name="John Doe" age={22} />
        <Conditional name="Alice" age={15} />
>>>>>>> 9a35dbf23da4414236f492ce0b39c7889a6329f2

    </>
  )
}
export default App
