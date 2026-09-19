export default function Car(){
  let marks = 68;
  return (
  <>
  { {/* Ternary if-else condition in Jsx*/}
    marks>80 ?
    <h1>Brilliant Result!</h1>
    :
    <h1>Average Result!</h1>
  }
  <div>
    {/* Imidiately invoke function use for if-else condition in Jsx*/}
    {(()=>
        {
          if(marks>80)
          {
            return <h1>Brilliant Result</h1>
          } else
          {
           return <h1>Average Result</h1>
          }
    })()}
  </div>
  </>
  )
}
