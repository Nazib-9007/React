 function Carapp(){
    return (
        <>
        <h1>This is the 2nd component.</h1>
        <p>Hello react Developer! How are you?</p>
        </>
    )
}

export default function Car(props){

    let age = 20;

    const result = (age) > 18? "Adult" : "You are too little!"

    return (
        <>
            <h1>Hello React Developer!</h1>
            <p>This is the props color {props.color} </p>
            {/* <p>This is {x < 10 ? "Apple" : "Banana"} fruit!</p> */}
            <h3>The react Developer age is {age} type is {result} </h3>
            <Carapp />
        </>
    )
}