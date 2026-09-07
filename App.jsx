import './App.css'
import Card from './components/card.jsx'

function App() {
  return <Card firstName="Nazib" lastName="Ul Alam" age={25}>
    {/* //children get from Card component... */}
    <h1>Welcome To the React world!</h1>
  </Card>
}
export default App
