import { Component } from "react";
class Car extends Component {
    constructor(props) {
        super(props);
        this.state = { favouriteColor: "ধুসর" };
    }
    render() {
        return (
            <>
                <h1 className="text-4xl m-15 text-green-400 border-4 rounded-3xl shadow-xl/50 shadow-amber-300 text-shadow-sm text-shadow-green-300 border-amber-400 bg-black p-5 font-bold font-mono text-center">
                    এই গাড়ির রঙ {this.state.favouriteColor}
                </h1>
            </>
        )
    }
}

export default Car;