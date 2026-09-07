export default function Card({ children, firstName, lastName, age}){

    return(
        <>
        <div>
            {/* //call children component... */}
            {children}
            First name: {firstName}, 
            Last name: {lastName},
            Age: {age}
        </div>
            {/* conditional statement.. */}
            {age < 18 &&
                <>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>You are too Young</p>
                </>
            }
            {age > 18 &&
                <>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>You are Older!</p>
                </>
            }
        </>
    );
}
