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
        </>
    );
}
