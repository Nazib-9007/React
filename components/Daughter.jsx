export default function Daughter(getDaughterValue){
    
    const {type, brand} = getDaughterValue;
    
    return (
        <div className="bg-black text-center p-10 text-yellow-600 border-2 m-0.5 border-green-400 font-serif text-base/8">
        <h1 className="text-3xl">This is Daughter!</h1>
        {getDaughterValue.children}
        <i>Type = {type} </i>
        <em>Brand = {brand} </em>
        </div>
    )
}