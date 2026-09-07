import './App.css'
import Card from './components/card.jsx'
const members = [
  { name: 'Nazib', age: 21 },
  { name: 'Karim', age: 20 },
  { name: 'Rahim', age: 15 },
];
function App() {
  return (
    <Card firstName="Nazib" lastName="Ul Alam" age={25}>
    {/* //children get from Card component... */}
    <h1>Welcome To the React world!</h1>
  </Card>
  {
        members
        .filter((item)=> item.age > 18)
        .sort((a, b)=> a.age - b.age)
        .map((member)=> (
          <Card name={member.name} age={member.age} />
        ))
      }
  )
}
export default App
