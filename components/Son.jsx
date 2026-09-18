export default function Son(props) {
  return (
    <div className="bg-black text-green-400 text-center p-10 font-serif border-2 m-0.5 border-green-400 text-base/8">
      <h2 className="text-3xl">This is Son!</h2>
      {props.children}
    </div>
  );
}