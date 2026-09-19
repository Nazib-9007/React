export default function Car(){
  
  let marks = 68;

  return (
  <>
  {
    marks>80 ?
    <h1>Brilliant Result!</h1>
    :
    <h1>Average Result!</h1>
  }
  </>
  )
}